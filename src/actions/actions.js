import { POPULATE_PRODUCTS, SET_MAINPAGE, SET_ERROR } from '../constants';
import restructureData from '../utils';

export const getProducts  = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log(restructureData(products));
        dispatch({ type: POPULATE_PRODUCTS, payload: restructureData(products) });
        dispatch({ type: SET_MAINPAGE });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: SET_ERROR });
    }
};