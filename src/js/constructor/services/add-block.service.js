import $ from "jquery";
import jQueryModal from 'jquery-modal';

export class AddBlockService {
    /** @static
     * @async
     * @return Promise<ISiteTemplateBlock>
      */
    static openBlockModal() {


        // console.log(.modal(), 'jQueryModal');

        return new Promise((res) => {
            const $container = $('<div>');
            const $buttons = $('<div>')
                .css({
                    'display': 'flex',
                    'flex-direction': 'column',
                });
            const $addCommonBlock = $('<button>')
                .text('Common Block')
                .on('click', () => {
                    $.modal.close();
                    res({
                        type: 'common',
                        title: 'Common Block',
                        height: '200px',
                        backgroundColor: '#fff',
                        backgroundImage: 'https://cs8.pikabu.ru/post_img/big/2016/11/19/8/1479562735179279674.jpg',
                    })
                });
            const $addAbsoluteBlock = $('<button>')
                .text('Absolute Block')
                .on('click', () => {
                    $.modal.close();
                    res({
                        type: 'absolute',
                        title: 'Absolute Block',
                        height: '150px',
                        width: '200px',
                        left: '0',
                        top: '0',
                        backgroundColor: '#fff',
                        backgroundImage: 'https://cs8.pikabu.ru/post_img/big/2016/05/03/0/1462224311122833219.jpg',
                    })
                });
            const $addText = $('<button>')
                .text('Text Block')
                .on('click', () => {
                    $.modal.close();
                    res({
                        type: 'text',
                        title: 'Text Block',
                        text: 'Your Text',
                        fontSize: '18px'
                    })
                });
            const $addLink = $('<button>')
                .text('Link Block (not implemented)')
                .attr({ 'disabled': true })
                .on('click', () => {
                    $.modal.close();
                    res({
                        type: 'link',
                        title: 'Link Block',
                        text: 'Some text!',
                        href: ''
                    })
                });
            const $addImage = $('<button>')
                .text('Image Block (not implemented)')
                .attr({ 'disabled': true })
                .on('click', () => {
                    $.modal.close();
                    res({
                        type: 'image',
                        title: 'Image Block',
                        imageTitle: 'Some text!',
                        src: 'https://r.wdfl.co/financial-money-heart.svg'
                    })
                });
            const $addSlideShow = $('<button>')
                .text('Slide-Show Block (not implemented)')
                .attr({ 'disabled': true })
                .on('click', () => {
                    $.modal.close();
                    res({
                        type: 'image',
                        title: 'Slide-Show Block',
                        images: ['https://cs8.pikabu.ru/post_img/big/2016/11/19/8/1479562735179279674.jpg']
                    })
                });

            $buttons
                .append($addCommonBlock)
                .append($addAbsoluteBlock)
                .append($addText)
                .append($addLink)
                .append($addImage)
                .append($addSlideShow);

            $container
                .append($buttons)
                .modal();
        });
    }
}
