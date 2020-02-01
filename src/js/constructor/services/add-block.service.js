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
            const $container = $('<div>')
                .css({
                    'display': 'flex',
                    'flex-direction': 'column',
                });
            const $addCommonBlock = $('<button>')
                .val('Common Block')
                .on('click', () => {
                    res({
                        type: 'common'
                    })
                });


            res();
        });
    }
}
