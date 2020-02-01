import $ from "jquery";

export class ConstructActions {

    constructor() {
        /** @type { JQuery } */
        this.$constructorElement = $('<div>');
        this.$constructorElement.css({
            'width': '100%',
            'height': '100%',
            'background-color': '#d0ffe4',
        });
    }
}
