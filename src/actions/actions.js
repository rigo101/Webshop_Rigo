import { POPULATE_PRODUCTS, FETCH_FAILED } from '../constants';
import restructureData from '../utils';

export const getProducts  = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log(restructureData(products));
        dispatch({ type: POPULATE_PRODUCTS, payload: restructureData(products) });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: FETCH_FAILED });
    }
};