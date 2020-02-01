import $ from 'jquery';

export class Constructor {
    /** @constructor
     * @param {string} selector */
    constructor(selector) {
        /** @type { JQuery } */
        this.$constructorElement = $(selector);
        this.$constructorElement.css({
            'position': 'relative',
            'width': '100%',
            'height': '100%',
            'background-color': 'gray',
        });
    }
}
