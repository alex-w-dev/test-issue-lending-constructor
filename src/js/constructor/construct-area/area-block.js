import $ from "jquery";

export class AreaBlock {
    /** @constructor
     * @param {ISiteTemplateBlock} block
     * @param {number} zIndex */
    constructor(block, zIndex) {
        /** @type ISiteTemplateBlock */
        this.block = block;
        this.zIndex = zIndex || 1;

        /** @type JQuery  */
        this.$constructorElement = $('<div>')
            .css({
                'z-index': this.zIndex
            });

        this._initSelf();
        this._initChildren();
    }

    _initSelf() {
        switch (this.block.type) {
            case "root":
                this.$constructorElement.css({
                    'display': 'flex',
                    'flex-direction': 'column',
                    'position': 'relative',
                    'width': this.block.siteWidth,
                    'min-height': this.block.minHeight,
                    'background-color': this.block.backgroundColor,
                });
                break;
            case "common":
                this.$constructorElement.css({
                    'display': 'flex',
                    'flex-direction': 'column',
                    'position': 'relative',
                    'width': '100%',
                    'height': this.block.height,
                    'background-color': this.block.backgroundColor,
                    'background-image': `url(${this.block.backgroundImage})`,
                    'background-repeat': 'no-repeat',
                    'background-size': 'auto',
                    'background-position': 'center',
                });

                break;
            case "absolute":
                this.$constructorElement.css({
                    'display': 'flex',
                    'flex-direction': 'column',
                    'position': 'absolute',
                    'width': this.block.width,
                    'height': this.block.height,
                    'left': this.block.left,
                    'top': this.block.top,
                    'background-color': this.block.backgroundColor,
                    'background-image': `url(${this.block.backgroundImage})`,
                    'background-repeat': 'no-repeat',
                    'background-size': 'auto',
                    'background-position': 'center',
                });

                break;

            case "text":
                this.$constructorElement.css({
                    'display': 'inline',
                    'font-size': this.block.fontSize,
                });
                this.$constructorElement.text(this.block.text);

                break;
            default:
                console.warn('AreBlock was not implemented for' + this.block.type + ' block type');
        }
    }

    _initChildren() {
        if (!this.block.children.length) return;

        for (let i = 0; i < this.block.children.length; i++) {
            const child = this.block.children[i];

            this.$constructorElement.append(new AreaBlock(child, this.zIndex + i).$constructorElement)
        }
    }
}
