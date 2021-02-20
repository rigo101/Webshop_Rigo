import { SET_CATEGORY, SET_PAGE } from '../constants';

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
