import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    SET_CATEGORY,
    SET_PAGE,
    SET_SELECTED_PRODUCT,
    UPDATE_SEARCH_TERM
} from '../constants';

export const setCategory = (categoryName) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_CATEGORY, payload: categoryName });
    }
};

export const setActivePage = (pageName) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_PAGE, payload: pageName });
    }
};

export const setSelectedProductID = (productID) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_SELECTED_PRODUCT, payload: productID });
    }
};

export const setSearchTerm = (newSearchTerm) => {
    return (dispatch, getState) => {
        dispatch({ type: UPDATE_SEARCH_TERM, payload: newSearchTerm });
    }
};

export const addToCart = (productToBuy) => {
    return (dispatch, getState) => {
        dispatch({ type: ADD_PRODUCT, payload: productToBuy });
    }
};

export const removeFromCart = (cartItemID) => {
    return (dispatch, getState) => {
        dispatch({ type: REMOVE_PRODUCT, payload: cartItemID });
    }
};
