import $ from "jquery";
import {TemplateService} from "../../services/template.service";

export class DefaultBlock {
    /** @constructor*/
    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'display': 'flex',
            'flex-direction': 'column',
            'background-color': '#f7e6ff',
        });

        /**  @type ISiteTemplateBlock */
        this.block;
        TemplateService.editingBlock$.subscribe((block) => {
            console.log(666666, '666666');
            console.log(block.title, 'block.title');
            this.block = block;
            this._clearContent();
            this._initContent();
        })
    }

    /** @private */
    _clearContent() {
        this.$constructorElement.html('');
    }

    /** @private */
    _initContent() {
        this.initTitleInput();
        this.initPropertyInputs();
    }

    /** @protected */
    initPropertyInputs() {
        throw new Error('initPropertyInputs method must be implemented')
    }

    /** @protected */
    initTitleInput() {
        const $titleContainer = $(`<label><span>Block title:</span></label>`);
        const $titleInput = $('<input type="text" placeholder="Block title">')
            .val(this.block.title)
            .on('keyup',() => {
                TemplateService.updateBlockTile(this.block, $titleInput.val());
            });

        TemplateService.blockTitleChanged$.subscribe((block) => {
            $titleInput.val(block.title);
        });

        $titleContainer.append($titleInput);
        this.$constructorElement.append($titleContainer);
        this.$constructorElement.append($('<hr>'));
    }
}
