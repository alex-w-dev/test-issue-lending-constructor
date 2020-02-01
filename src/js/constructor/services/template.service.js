import {Subject, BehaviorSubject} from "rxjs";

export const NEW_TEMPLATE = {
    title: 'New Site',
    keywords: '',
    description: '',
    blocks: [],
};

export class TemplateService {
    // PROPERTIES: -----------------------------------------------------------------------
    /** @static
     * @type { Subject<ISiteTemplate> } */
    static siteTemplateImported$ = new Subject();

    /** @static
     * @type { Subject<ISiteTemplate['title']> } */
    static siteTemplateTitleChanged$ = new Subject();

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
    static editingBlock$ = new BehaviorSubject(null);

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
        this.editingBlock$.next(template.blocks[0] || null);
    }

    /** @static
     * @param { ISiteTemplateBlock } block */
    static startEditBlock(block) {
        if (this.editingBlock$.getValue() === block) return;
        this.editingBlock$.next(block);
    }

    /** @static
     * @param { string } title */
    static changeTemplateTile(title) {
        this.currentTemplate.title = title;
        this.siteTemplateTitleChanged$.next(title);
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
        title: 'Testing site',
        keywords: '',
        description: 'Just for initial testing of test issue',
        blocks: [],
    }
}
