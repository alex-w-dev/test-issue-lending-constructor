import $ from "jquery";
import {TemplateService} from "../../services/template.service";
import {DefaultBlock} from "./_default-block";
import {PropertiesInputFactory} from "../classes/properties-input.factory";

export class RootBlock extends DefaultBlock{
    /** @constructor
     * @param { ISiteTemplateBlock } block*/
    constructor(block) {
        super(block);

        console.log(1, '1');
    }

    /** @override */
    initPropertyInputs() {
        this._initMetaTitleInput();
        this._initMetaKeywordsInput();
        this._initMetaDescriptionInput();
    }

    /** @private */
    _initMetaTitleInput() {
        const $metaTitleInput = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'metaTitle',
            placeholder: 'My own site',
            label: 'Site title'
        });
        this.$constructorElement.append($metaTitleInput);
    }

    /** @private */
    _initMetaKeywordsInput() {
        const $metaKeywordsInput = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'metaKeywords',
            placeholder: 'keyword1, keyword2, etc ...',
            label: 'Site Keywords (comma-separated)'
        });
        this.$constructorElement.append($metaKeywordsInput);
    }

    /** @private */
    _initMetaDescriptionInput() {
        const $metaKeywordsInput = PropertiesInputFactory.getTextareaInput({
            block: this.block,
            blockPropertyKey: 'metaDescription',
            placeholder: 'Fill description of your site there ...',
            label: 'Site Description'
        });
        this.$constructorElement.append($metaKeywordsInput);
    }

}
