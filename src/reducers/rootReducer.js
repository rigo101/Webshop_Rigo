import productsReducer from './productsReducer';
import appReducer from './appReducer';
import activePageReducer from './activePageReducer';

//TODO: use combineReducers

const webshop = {
    products: {},
    category: null,
    activePage: 'loading' // loading, mainPage(categories), productsPage(category), itemPage(item.id)
};

const rootReducer = (state = webshop, action) => {
    return {
        products: productsReducer(state.products, action),
        category: appReducer(state.category, action),
        activePage: activePageReducer(state.activePage, action)
    };
}

export default rootReducer;