import $ from "jquery";
import {TemplateService} from "../services/template.service";
import {ConstructBlock} from "./construct-block";

export class ConstructBlocks {

    constructor() {
        /** @type JQuery  */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#ffe7d4',
        });

        /** @type ISiteTemplate */
        this.template;
        TemplateService.currentTemplate$.subscribe((currentTemplate) => {
            this.template = currentTemplate;
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
        const mainBlock = new ConstructBlock(this.template);
        this.$constructorElement.append(mainBlock.$constructorElement);
    }
}
