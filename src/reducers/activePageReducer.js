import { SET_MAINPAGE, SET_PRODUCTSPAGE, SET_ITEMPAGE, SET_ERROR } from '../constants';

const activePageReducer = (state = '', action) => {
    switch (action.type) {
        case SET_MAINPAGE:
            return 'mainPage';
        case SET_PRODUCTSPAGE:
            return 'productsPage';
        case SET_ITEMPAGE:
            return 'itemPage';
        case SET_ERROR:
            return '';
        default:
            return state;
    }
};

export default activePageReducer;