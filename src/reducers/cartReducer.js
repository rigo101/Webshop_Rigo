import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { id, qty, size } = action.payload;
            const productKey = `${id}_${size}`;
            const newQty = state[productKey] ? state[productKey] + qty : qty;
            return { ...state, [productKey]: newQty };
        case REMOVE_PRODUCT:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};

export default cartReducer;
