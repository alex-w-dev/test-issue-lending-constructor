import { Subject } from 'rxjs';

export class EventService {
    /** @static
     * @type { Subject<ISiteTemplate> } */
    static siteTemplateImported = new Subject();

    /** @static
     * @type { Subject<ISiteTemplate['title']> } */
    static siteTemplateTitleChanged = new Subject();

    /** @static
     * @type { Subject<ISiteTemplate['keywords']> } */
    static siteTemplateKeywordsChanged = new Subject();

    /** @static
     * @type { Subject<ISiteTemplate['description']> } */
    static siteTemplateDescriptionChanged = new Subject();
}
