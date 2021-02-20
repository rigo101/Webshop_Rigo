import { SET_SELECTED_PRODUCT } from '../constants';

const selectedProductReducer = (state = null, action) => {
    switch (action.type) {
        case SET_SELECTED_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};

export default selectedProductReducer;