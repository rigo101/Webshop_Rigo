import { POPULATE_PRODUCTS } from '../constants';
import restructureData from '../utils';
import { setActivePage } from './AppActions';

export const getProducts  = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
console.log(restructureData(products));
        dispatch({ type: POPULATE_PRODUCTS, payload: restructureData(products) });
        dispatch(setActivePage('mainPage'));
    } catch (error) {
        console.log(error.message);
        dispatch(setActivePage('error')); // pageSelector default
    }
};