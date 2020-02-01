import $ from "jquery";
import {TemplateService} from "../../services/template.service";
import {DefaultBlock} from "./_default-block";
import {PropertiesInputFactory} from "../classes/properties-input.factory";

export class AbsoluteBlock extends DefaultBlock{
    /** @constructor
     * @param { ISiteTemplateBlock } block*/
    constructor(block) {
        super(block);
    }

    /** @override */
    initPropertyInputs() {
        this._initHeightInput();
        this._initWidthInput();
        this._initLeftInput();
        this._initTopInput();
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
    _initWidthInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'width',
            placeholder: '200px',
            label: 'Block width'
        });
        this.$constructorElement.append($input);
    }

    /** @private */
    _initLeftInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'left',
            placeholder: '10px',
            label: 'Block left position'
        });
        this.$constructorElement.append($input);
    }

    /** @private */
    _initTopInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'top',
            placeholder: '10px',
            label: 'Block top position'
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
