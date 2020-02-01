import $ from 'jquery';
import { ConstructActions } from './construct-actions/construct-actions';
import { ConstructArea } from './construct-area/construct-area';
import { ConstructProperties } from "./construct-properties/construct-properties";
import {ConstructBlocks} from "./construct-blocks/construct-blocks";

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

        /** @type { ConstructArea } */
        this.constructArea = new ConstructArea();

        /** @type { ConstructActions } */
        this.constructActions = new ConstructActions();

        /** @type { ConstructProperties } */
        this.constructProperties = new ConstructProperties();

        /** @type { ConstructBlocks } */
        this.constructBlocks = new ConstructBlocks();

        this.initTemplate();
    }

    initTemplate() {
        const topHeight = '100px';
        const middleLeftWidth = '30vw'; // todo: change to 30% this.$constructorElement width
        const middleRightWidth = '30vw'; // todo: change to 30% this.$constructorElement width
        const $top = $('<div>').css({
            'height': topHeight,
            'width': '100%',
            'background-color': '#fff3c6',
        });
        const $middle = $('<div>').css({
            'display': `flex`,
            'height': `calc(100% - ${topHeight})`,
            'width': '100%',
            'background-color': '#cbffd0',
        });
        const $middleLeft = $('<div>').css({
            'height': `100%`,
            'width': middleLeftWidth,
            'background-color': '#ffc99a',
        });
        const $middleRight = $('<div>').css({
            'height': `100%`,
            'width': middleRightWidth,
            'background-color': '#ffc99a',
        });
        const $middleCenter = $('<div>').css({
            'height': `100%`,
            'width': `calc(100% - ${middleLeftWidth} - ${middleRightWidth})`,
            'background-color': '#fbc6ff',
        });

        this.$constructorElement.append($top);
        $middle.append($middleLeft);
        $middle.append($middleCenter);
        $middle.append($middleRight);
        this.$constructorElement.append($middle);

        $top.append(this.constructActions.$constructorElement);
        $middleLeft.append(this.constructBlocks.$constructorElement);
        $middleRight.append(this.constructProperties.$constructorElement);
        $middleCenter.append(this.constructArea.$constructorElement);
    }

}
