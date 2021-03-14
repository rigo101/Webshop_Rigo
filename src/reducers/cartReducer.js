import { ADD_PRODUCT } from '../constants';

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { id, qty, size } = action.payload;
            return { ...state, [`${id}_${size}`]: qty };

        default:
            return state;
    }
};

export default cartReducer;
