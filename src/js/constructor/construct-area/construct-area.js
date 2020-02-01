import $ from "jquery";
import {TemplateService} from "../services/template.service";
import {ConstructBlock} from "../construct-blocks/construct-block";
import {AreaBlock} from "./area-block";

export class ConstructArea {

    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'display': 'flex',
            'align-items': 'center',
            'flex-direction': 'column',
            'overflow': 'auto',
            'width': '100%',
            'height': '100%',
            'background-color': '#cdf1ff',
        });

        /** @type ISiteTemplate */
        this.template;
        TemplateService.currentTemplate$.subscribe((currentTemplate) => {
            this.template = currentTemplate;
            this._rerenderBlocks();
        });
        TemplateService.blockChanged$.subscribe((templateBlock) => {
            this._rerenderBlocks();
        });
        TemplateService.editingBlock$.subscribe((templateBlock) => {
            this._rerenderBlocks();
        });
    }

    /** @private */
    _rerenderBlocks() {
        // clear
        this.$constructorElement.html('');

        // render new blocks
        const $root = new AreaBlock(this.template);
        this.$constructorElement.append($root.$constructorElement);
    }
}
