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
        this._initActionExport();
    }

    /** @private */
    _initActionNew() {
        const $actionNew = $('<button>New</button>')
            .on('click',() => {
                TemplateService.newTemplate();
            });

        this.$constructorElement.append($actionNew);
    }

    /** @private */
    _initActionExport() {
        const $actionExport = $('<button>Export as JSON</button>')
            .on('click',() => {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";

                var json = JSON.stringify(TemplateService.currentTemplate, null, 2),
                    blob = new Blob([json], {type: "octet/stream"}),
                    url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = 'my-web-site.json';
                a.click();
                window.URL.revokeObjectURL(url);

                document.body.removeChild(a);
            });

        this.$constructorElement.append($actionExport);
    }

}
