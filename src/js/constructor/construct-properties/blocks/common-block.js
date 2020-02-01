import $ from "jquery";
import {TemplateService} from "../../services/template.service";
import {DefaultBlock} from "./_default-block";
import {PropertiesInputFactory} from "../classes/properties-input.factory";

export class CommonBlock extends DefaultBlock{
    /** @constructor
     * @param { ISiteTemplateBlock } block*/
    constructor(block) {
        super(block);
    }

    /** @override */
    initPropertyInputs() {
        this._initHeightInput();
        this._initBackgroundColorInput();
        this._initBackgroundColorImage();
    }

    /** @private */
    _initHeightInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'height',
            placeholder: '200px',
            label: 'Block height'
        });
        this.$constructorElement.append($input);
    }

    /** @private */
    _initBackgroundColorInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'backgroundColor',
            placeholder: '#fff',
            label: 'Background Color'
        });
        this.$constructorElement.append($input);
    }

    /** @private */
    _initBackgroundColorImage() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'backgroundImage',
            placeholder: 'http://',
            label: 'Background Image'
        });
        this.$constructorElement.append($input);
    }
}
