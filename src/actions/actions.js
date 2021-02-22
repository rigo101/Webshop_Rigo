import { POPULATE_PRODUCTS, POPULATE_PRODUCTS_BY_ID } from '../constants';
import { restructureData, restructureByID } from '../utils';
import { setActivePage } from './AppActions';

export const getProducts  = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        dispatch({ type: POPULATE_PRODUCTS, payload: restructureData(products) });
        dispatch({ type: POPULATE_PRODUCTS_BY_ID, payload: restructureByID(products) });
        dispatch(setActivePage('mainPage'));
    } catch (error) {
        console.log(error.message);
        dispatch(setActivePage('error')); // pageSelector default
    }
};
