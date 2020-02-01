import $ from "jquery";
import {TemplateService} from "../services/template.service";
import {AddBlockService} from "../services/add-block.service";

export class ConstructBlock {

    /** @constructor
     * @param {ISiteTemplateBlock} block */
    constructor(block) {
        /** @type ISiteTemplateBlock */
        this.block = block;

        /** @type JQuery  */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'display': 'flex',
            'flex-direction': 'column',
            'width': '100%',
            'background-color': '#ecff87',
        });

        this._initTitleAndActions();
    }

    /** @private */
    _initTitleAndActions() {
        const $container = $('<div>')
            .css({
                'display': 'flex',
                'align-items': 'center',
                'height': '30px',
                'background-color': '#cddcff',
            })
            .on('click', (event) => {
                event.stopPropagation();
                TemplateService.startEditBlock(this.block);
            });
        const $title = $(`<div>${this.block.title}</div>`)
            .css({
                'flex': '1'
            });
        const $newAction = $(`<button title="New">N</button>`)
            .css({
                'flex': '0 1'
            })
            .on('click', (event) => {
                event.stopPropagation();
                AddBlockService.openBlockModal()
                    .then(() => {
                        console.log(1, '1');
                    })
                    .catch();
                // TemplateService.add.next()
            });
        const $removeAction = $(`<button title="Remove">R</button>`)
            .css({
                'flex': '0 1'
            });

        $container
            .append($title)
            .append($newAction)
            .append($removeAction)
            .appendTo(this.$constructorElement);

        TemplateService.blockTitleChanged$.subscribe((block) => {
            if (this.block !== block) return;
            $title.text(this.block.title);
        });
    }

}
