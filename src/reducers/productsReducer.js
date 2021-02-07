import { POPULATE_PRODUCTS } from '../constants';

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_PRODUCTS:
            return action.payload;

        default:
            return state;
    }
};

export default productsReducer;