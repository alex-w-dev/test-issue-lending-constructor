import {EventService} from "./event.service";

export const NEW_TEMPLATE = {
    title: 'New Site',
    keywords: '',
    description: '',
    blocks: [],
};

export class TemplateService {
    /** @static
     * @type { ISiteTemplate } */
    static currentTemplate = getTestTemplateWithFillSomeData();

    /** @static */
    static newTemplate() {
        TemplateService.importTemplate(NEW_TEMPLATE);
    }

    /** @static
     * @param { ISiteTemplate } template */
    static importTemplate(template) {
        template = JSON.parse(JSON.stringify(template)); // to fix links
        TemplateService.currentTemplate = template;
        EventService.siteTemplateImported.next(template);
    }

    /** @static
     * @param { string } title */
    static changeTemplateTile(title) {
        TemplateService.currentTemplate.title = title;
        EventService.siteTemplateTitleChanged.next(title);
    }

    /** @static
     * @param { string } keywords */
    static changeTemplateKeywords(keywords) {
        TemplateService.currentTemplate.keywords = keywords;
        EventService.siteTemplateKeywordsChanged.next(keywords);
    }

    /** @static
     * @param { string } description */
    static changeTemplateDescription(description) {
        TemplateService.currentTemplate.description = description;
        EventService.siteTemplateDescriptionChanged.next(description);
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
