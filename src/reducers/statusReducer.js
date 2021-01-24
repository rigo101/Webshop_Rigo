const statusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
                return { ...state, loading: false, message: 'LOADING OK!' };

        case 'FETCH_FAILED':
            return { ...state, loading: false, message: 'COMMUNICATION or SERVER ERROR!' };

        default:
            return state;
    }
};

export default statusReducer;