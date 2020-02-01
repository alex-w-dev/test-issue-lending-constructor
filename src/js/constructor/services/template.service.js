import {Subject, BehaviorSubject} from "rxjs";

export const NEW_TEMPLATE = {
    type: 'root',
    title: 'Root Block',
    metaTitle: 'New Site',
    metaKeywords: '',
    metaDescription: '',
    siteWidth: '500px',
    minHeight: '500px',
    backgroundColor: '#fff',
    children: [],
};

export class TemplateService {
    // PROPERTIES: -----------------------------------------------------------------------
    /** @static
     * @type { Subject<ISiteTemplate> } */
    static siteTemplateImported$ = new Subject();

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
        this.currentTemplate$.next(template);
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
     * @param { ISiteTemplateBlock } block
     * @param { ISiteTemplateBlock } child */
    static addBlockChild(block, child) {
        console.log(33, '33');
        block.children.push(child);

        // TODO fix in future
        child.children = [];

        this.startEditBlock(child);
    }
}


/** @return ISiteTemplate */
function getTestTemplateWithFillSomeData() {
    return {
        "type": "root",
        "title": "Testing site",
        "metaTitle": "",
        "metaKeywords": "",
        "metaDescription": "Just for initial testing of test issue",
        "siteWidth": "500px",
        "minHeight": "500px",
        "backgroundColor": "#fff",
        "children": [
            {
                "type": "common",
                "title": "Common Block",
                "height": "200px",
                "backgroundColor": "#fff",
                "backgroundImage": "https://cs8.pikabu.ru/post_img/big/2016/11/19/8/1479562735179279674.jpg",
                "children": [
                    {
                        "type": "absolute",
                        "title": "Absolute Block",
                        "height": "160px",
                        "width": "200px",
                        "left": "0",
                        "top": "0",
                        "backgroundColor": "#fff",
                        "backgroundImage": "https://cs8.pikabu.ru/post_img/big/2016/05/03/0/1462224311122833219.jpg",
                        "children": []
                    }
                ]
            },
            {
                "type": "common",
                "title": "Common Block",
                "height": "200px",
                "backgroundColor": "#fff",
                "backgroundImage": "https://cs8.pikabu.ru/post_img/big/2016/11/19/8/1479562735179279674.jpg",
                "children": [
                    {
                        "type": "absolute",
                        "title": "Absolute Block",
                        "height": "150px",
                        "width": "200px",
                        "left": "250px",
                        "top": "0",
                        "backgroundColor": "#fff",
                        "backgroundImage": "https://cs8.pikabu.ru/post_img/big/2016/05/03/0/1462224311122833219.jpg",
                        "children": [
                            {
                                "type": "common",
                                "title": "Common Block",
                                "height": "70px",
                                "backgroundColor": "#fff",
                                "backgroundImage": "",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "common",
                "title": "Common Block",
                "height": "200px",
                "backgroundColor": "#fff",
                "backgroundImage": "https://cs8.pikabu.ru/post_img/big/2016/11/19/8/1479562735179279674.jpg",
                "children": []
            }
        ]
    }
}
