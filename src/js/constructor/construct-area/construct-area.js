import $ from "jquery";

export class ConstructArea {

    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#cdf1ff',
        });
    }
}
