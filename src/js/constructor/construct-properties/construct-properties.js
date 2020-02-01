import $ from "jquery";

export class ConstructProperties {

    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#ffe7d4',
        });
    }
}
