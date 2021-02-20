import { POPULATE_PRODUCTS_BY_ID } from '../constants';

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_PRODUCTS_BY_ID:
            return action.payload;
        default:
            return state;
    }
};

export default productsReducer;