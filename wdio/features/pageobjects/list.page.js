

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ListPage extends Page {
    /**
     * define selectors using getter methods
     */
    get item1 () {
        return $('#Item1');
    }

    get item2 () {
        return $('#Item2');
    }

    get selecteditems () {
        return $('#selecteditems');
    }
}

export default new ListPage();
