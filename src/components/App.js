import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/actions';
import { setCategory, setActivePage, setSelectedProductID } from '../actions/AppActions';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GenericCard from './GenericCard';
import Product from './Product';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    h1: {
        textTransform: 'capitalize',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '40px',
        color: '#8d8881'
    }
}));

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts);
    }, [dispatch]);

    const activePage = useSelector( state => state.activePage );
    const products = useSelector( state => state.products );
    const items = useSelector( state => state.products[state.category] );
    const categoryHeading = useSelector( state => state.category );
    const selectedProduct = useSelector( state => state.productsByID[state.selectedProductID] );

    const handleProductsClick = (categoryName) => {
        dispatch(setCategory(categoryName));
        dispatch(setActivePage('productsPage'));
    };

    const handleItemClick = (categoryName, id) => {
        dispatch(setActivePage('itemPage'));
        dispatch(setSelectedProductID(id));
    };

    const mainPage = () => {
        return (<>
                    <h1 className={classes.h1}>Categories</h1>
                    <div className={classes.root}>
                        { Object.keys(products).map( (category) => {
                            return <GenericCard
                                key={ category }
                                url = { products[category][0].image }
                                name = { category }
                                category = { category }
                                onClick = { handleProductsClick }
                            />})
                        }
                    </div>
                </>)
    };
    const productsPage = () => {
        return (<>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ () => dispatch(setActivePage('mainPage')) }
                    >BACK</Button>
                    <h1 className={classes.h1}>{ categoryHeading }</h1>
                    <div className={classes.root}>
                        { items.map( (item) => {
                            return (
                                <GenericCard
                                    id={ item.id }
                                    key={ item.id }
                                    url = { item.image }
                                    name = { item.title }
                                    category = { item.category }
                                    onClick = { handleItemClick }
                                />)
                            })
                        }
                    </div>
                </>)
    };
    const itemPage = () => {
        return (<>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ () => dispatch(setActivePage('productsPage')) }
                    >BACK</Button>
                    <div className={classes.root}>
                        <Product
                            image={ selectedProduct.image }
                            title={ selectedProduct.title }
                            description={ selectedProduct.description }
                            price={ selectedProduct.price }
                            category={ selectedProduct.category }
                        />
                    </div>
                </>)
    };

    const pageSelector = () => {
        switch (activePage) {
            case 'loading': return <CircularProgress />;
            case 'mainPage': return mainPage();
            case 'productsPage': return productsPage();
            case 'itemPage': return itemPage();
            default: return <h1>Error</h1>;
        }
    };

    return pageSelector();
}

export default App;
