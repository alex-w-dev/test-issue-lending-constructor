import {Subject, BehaviorSubject} from "rxjs";

export const NEW_TEMPLATE = {
    type: 'root',
    title: 'Root Block',
    metaTitle: 'New Site',
    metaKeywords: '',
    metaDescription: '',
    children: [],
};

export class TemplateService {
    // PROPERTIES: -----------------------------------------------------------------------
    /** @static
     * @type { Subject<ISiteTemplate> } */
    static siteTemplateImported$ = new Subject();

    /** @static
     * @type { Subject<ISiteTemplate['keywords']> } */
    static siteTemplateKeywordsChanged$ = new Subject();

    /** @static
     * @type { Subject<ISiteTemplate['description']> } */
    static siteTemplateDescriptionChanged$ = new Subject();

    /** @static
     * @type { Subject<ISiteTemplateBlock> } */
    static siteTemplateBlockChanged$ = new Subject();

    /** @static
     * @type { ISiteTemplate } */
    static currentTemplate = getTestTemplateWithFillSomeData();

    /** @static
     * @type { BehaviorSubject<ISiteTemplate> } */
    static currentTemplate$ = new BehaviorSubject(this.currentTemplate);

    /** @static
     * @type { BehaviorSubject<ISiteTemplateBlock> } */
    static editingBlock$ = new BehaviorSubject(this.currentTemplate);

    /** @static
     * @type { Subject<ISiteTemplateBlock> } */
    static blockTitleChanged$ = new Subject();

    /** @static
     * @type { Subject<ISiteTemplateBlock> } */
    static blockChanged$ = new Subject();

    // METHODS: -----------------------------------------------------------------------
    /** @static */
    static newTemplate() {
        this.importTemplate(NEW_TEMPLATE);
    }

    /** @static
     * @param { ISiteTemplate } template */
    static importTemplate(template) {
        template = JSON.parse(JSON.stringify(template)); // to fix links
        this.currentTemplate = template;
        this.siteTemplateImported$.next(template);
        this.editingBlock$.next(template);
    }

    /** @static
     * @param { ISiteTemplateBlock } block */
    static startEditBlock(block) {
        if (this.editingBlock$.getValue() === block) return;
        this.editingBlock$.next(block);
    }

    /** @static
     * @param { ISiteTemplateBlock } block
     * @param { string } title */
    static updateBlockTile(block, title) {
        block.title = title;
        this.blockTitleChanged$.next(block);
        this.blockChanged$.next(block);
    }

    /** @static
     * @param { ISiteTemplateBlock } block
     * @param { string } propertyKey
     * @param { * } value */
    static updateBlockProperty(block, propertyKey, value) {
        block[propertyKey] = value;
        this.blockChanged$.next(block);
    }

    /** @static
     * @param { string } keywords */
    static changeTemplateKeywords(keywords) {
        this.currentTemplate.keywords = keywords;
        this.siteTemplateKeywordsChanged$.next(keywords);
    }

    /** @static
     * @param { string } description */
    static changeTemplateDescription(description) {
        this.currentTemplate.description = description;
        this.siteTemplateDescriptionChanged$.next(description);
    }
}


/** @return ISiteTemplate */
function getTestTemplateWithFillSomeData() {
    return {
        type: 'root',
        title: 'Testing site',
        metaTitle: '',
        metaKeywords: '',
        metaDescription: 'Just for initial testing of test issue',
        children: [],
    }
}
