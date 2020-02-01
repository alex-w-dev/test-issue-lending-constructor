import $ from "jquery";
import {TemplateService} from "../../services/template.service";
import {DefaultBlock} from "./_default-block";
import {PropertiesInputFactory} from "../classes/properties-input.factory";

export class TextBlock extends DefaultBlock{
    /** @constructor
     * @param { ISiteTemplateBlock } block*/
    constructor(block) {
        super(block);
    }

    /** @override */
    initPropertyInputs() {
        this._initTextInput();
        this._initFontSizeInput();
    }

    /** @private */
    _initTextInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'text',
            placeholder: 'Some text',
            label: 'Text'
        });
        this.$constructorElement.append($input);
    }

    /** @private */
    _initFontSizeInput() {
        const $input = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'fontSize',
            placeholder: '16px',
            label: 'Font Size'
        });
        this.$constructorElement.append($input);
    }
}
