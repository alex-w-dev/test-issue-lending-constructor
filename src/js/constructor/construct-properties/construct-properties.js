import $ from "jquery";
import {TemplateService} from "../services/template.service";
import {RootBlock} from "./blocks/root-block";
import {CommonBlock} from "./blocks/common-block";
import {AbsoluteBlock} from "./blocks/absolute-block";
import {TextBlock} from "./blocks/text-block";

export class ConstructProperties {
    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#ffe7d4',
        });

        TemplateService.editingBlock$.subscribe((block) => {
            this.$constructorElement.html('');

            console.log(block, 'block');
            let propertiesClass;
            switch (block.type) {
                case 'root':
                    propertiesClass = new RootBlock(block);
                    break;
                case 'common':
                    propertiesClass = new CommonBlock(block);
                    break;
                case 'absolute':
                    propertiesClass = new AbsoluteBlock(block);
                    break;
                case 'text':
                    propertiesClass = new TextBlock(block);
                    break;
                default:
                    console.warn(`Properties Class for ${block.type} type is not implemented`)
            }

            if (propertiesClass) {
                if (!propertiesClass.$constructorElement) throw new Error('Properties Class must to implement $constructorElement');
                this.$constructorElement.append(propertiesClass.$constructorElement);
            }
        })
    }
}
