import $ from "jquery";
import {TemplateService} from "../services/template.service";

export class ConstructBlocks {

    constructor() {
        /** @type JQuery  */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#ffe7d4',
        });

        /** @type ISiteTemplate['blocks'] */
        this.templateBlocks;
        TemplateService.currentTemplate$.subscribe((currentTemplate) => {
            this.templateBlocks = currentTemplate.blocks;
            this._rerenderBlocks();
        });
        TemplateService.siteTemplateBlockChanged$.subscribe((templateBlock) => {
            this._rerenderBlocks();
        });
    }

    /** @private */
    _rerenderBlocks() {
        // clear
        this.$constructorElement.html('');

        // render new blocks

    }
}
