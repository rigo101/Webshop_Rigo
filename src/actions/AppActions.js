import { SET_CATEGORY, SET_PRODUCTSPAGE, SET_MAINPAGE, SET_ITEMPAGE } from '../constants';

export const setCategory = (categoryName) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_CATEGORY, payload: categoryName });
    }
};

export const displayProducts = () => {
    return (dispatch, getState) => {
        dispatch({ type: SET_PRODUCTSPAGE });
    }
};

export const displayMain = () => {
    return (dispatch, getState) => {
        dispatch({ type: SET_MAINPAGE });
    }
};

export const displayItem = () => {
    return (dispatch, getState) => {
        dispatch({ type: SET_ITEMPAGE });
    }
};