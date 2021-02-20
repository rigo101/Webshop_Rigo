import { SET_PAGE } from '../constants';

const activePageReducer = (state = '', action) => {
    switch (action.type) {
        case SET_PAGE:
            return action.payload;
        default:
            return state;
    }
};

export default activePageReducer;