import { SET_CATEGORY } from '../constants';

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.payload;
        default:
            return state;
    }
};

export default productsReducer;