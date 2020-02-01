import $ from "jquery";
import {TemplateService} from "../../services/template.service";

/** @typedef { Object } getTextInputParams
 * @property { ISiteTemplateBlock } block
 * @property { string } blockPropertyKey
 * @property { string } label
 * @property { string } placeholder */

export class PropertiesInputFactory {
    /** @static
     * @param {getTextInputParams} params
     * @return JQuery */
    static getTextInput(params) {
        const $container = $(`<label><span>${params.label}:</span></label>`);
        const $input = $(`<input type="text" placeholder="${params.placeholder}">`)
            .val(params.block[params.blockPropertyKey])
            .on('keyup', (event) => {
                console.log(event, 'event');
                TemplateService.updateBlockProperty(params.block, params.blockPropertyKey, $input.val())
            });

        TemplateService.blockChanged$.subscribe((block) => $input.val(params.block[params.blockPropertyKey]));

        return $container.append($input);
    }

    /** @static
     * @param {getTextInputParams} params
     * @return JQuery */
    static getTextareaInput(params) {
        // сейчас это дублирование кода (все почти также как и у getTextInput метода), но у меня нет времени рефакторить, потому что на весь продукт мне дано 8 часов ;-)
        const $container = $(`<label><span>${params.label}:</span></label>`);
        const $textarea = $(`<textarea placeholder="${params.placeholder}"></textarea>`)
            .val(params.block[params.blockPropertyKey])
            .on('keyup', (event) => {
                console.log(event, 'event');
                TemplateService.updateBlockProperty(params.block, params.blockPropertyKey, $textarea.val())
            });

        TemplateService.blockChanged$.subscribe((block) => $textarea.val(params.block[params.blockPropertyKey]));

        return $container.append($textarea);
    }
}
