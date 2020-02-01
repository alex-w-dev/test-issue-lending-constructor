import $ from "jquery";
import {TemplateService} from "../services/template.service";

export class ConstructActions {
    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#d0ffe4',
        });

        this._initActionNew();
        this._initTitleInput();
        this._initKeywordsInput();
        this._initDescriptionInput();
    }

    /** @private */
    _initActionNew() {
        const $actionNew = $('<button>New</button>')
            .on('click',() => {
                TemplateService.newTemplate();
            });

        this.$constructorElement.append($actionNew);
    }

    /** @private */
    _initTitleInput() {
        const $titleContainer = $('<label><span>Site Title: </span></label>');
        const $titleInput = $('<input type="text" placeholder="SiteTitle">')
            .val(TemplateService.currentTemplate.title)
            .on('keyup',() => {
                TemplateService.changeTemplateTile($titleInput.val());
            });

        TemplateService.siteTemplateTitleChanged$.subscribe((title) => $titleInput.val(title));
        TemplateService.siteTemplateImported$.subscribe((template) => $titleInput.val(template.title));

        $titleContainer.append($titleInput);
        this.$constructorElement.append($titleContainer);
    }

    /** @private */
    _initKeywordsInput() {
        const $titleContainer = $('<label><span>Site Keywords (comma-separated): </span></label>');
        const $keywordsInput = $('<input type="text" placeholder="keyword1, keyword2, etc ...">')
            .val(TemplateService.currentTemplate.keywords)
            .on('keyup',() => {
                TemplateService.changeTemplateKeywords($keywordsInput.val());
            });

        TemplateService.siteTemplateKeywordsChanged$.subscribe((keywords) => $keywordsInput.val(keywords));
        TemplateService.siteTemplateImported$.subscribe((template) => $keywordsInput.val(template.keywords));

        $titleContainer.append($keywordsInput);
        this.$constructorElement.append($titleContainer);
    }

    /** @private */
    _initDescriptionInput() {
        const $descriptionContainer = $('<label><span>Site Keywords (comma-separated): </span></label>');
        const $descriptionInput = $('<textarea placeholder="Fill description of your site there ...."></textarea>')
            .val(TemplateService.currentTemplate.description)
            .on('keyup',() => {
                TemplateService.changeTemplateDescription($descriptionInput.text());
            });

        TemplateService.siteTemplateDescriptionChanged$.subscribe((description) => $descriptionInput.val(description));
        TemplateService.siteTemplateImported$.subscribe((template) => $descriptionInput.val(template.description));

        $descriptionContainer.append($descriptionInput);
        this.$constructorElement.append($descriptionContainer);
    }

}
