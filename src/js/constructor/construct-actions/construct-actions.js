import $ from "jquery";
import {TemplateService} from "../services/template.service";

export class ConstructActions {
    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#d0ffe4',
        });

        this._initActionNew();
    }

    /** @private */
    _initActionNew() {
        const $actionNew = $('<button>New</button>')
            .on('click',() => {
                TemplateService.newTemplate();
            });

        this.$constructorElement.append($actionNew);
    }

}
