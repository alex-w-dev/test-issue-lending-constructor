import $ from "jquery";
import {TemplateService} from "../../services/template.service";
import {DefaultBlock} from "./_default-block";
import {PropertiesInputFactory} from "../classes/properties-input.factory";

export class RootBlock extends DefaultBlock{
    /** @constructor
     * @param { ISiteTemplateBlock } block*/
    constructor(block) {
        super(block);
    }

    /** @override */
    initPropertyInputs() {
        this._initMetaTitleInput();
        this._initMetaKeywordsInput();
        this._initMetaDescriptionInput();
        this._initSiteWidthInput();
        this._initMinHeightInput();
        this._initBackgroundColorInput();
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

    /** @private */
    _initSiteWidthInput() {
        const $metaKeywordsInput = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'siteWidth',
            placeholder: '1000px',
            label: 'Site Width'
        });
        this.$constructorElement.append($metaKeywordsInput);
    }

    /** @private */
    _initBackgroundColorInput() {
        const $metaKeywordsInput = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'backgroundColor',
            placeholder: '#fff',
            label: 'Site Background Color '
        });
        this.$constructorElement.append($metaKeywordsInput);
    }

    /** @private */
    _initMinHeightInput() {
        const $metaKeywordsInput = PropertiesInputFactory.getTextInput({
            block: this.block,
            blockPropertyKey: 'minHeight',
            placeholder: '500px',
            label: 'Site Minimum Height '
        });
        this.$constructorElement.append($metaKeywordsInput);
    }

}
