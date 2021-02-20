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
                    <h1>Categories</h1>
                    { Object.keys(products).map( (category) => {
                        return <GenericCard
                            key={ category }
                            url = { products[category][0].image }
                            name = { category }
                            category = { category }
                            onClick = { handleProductsClick }
                        />})
                    }
                </>)
    };
    const productsPage = () => {
        return (<>
                    <h1>{ categoryHeading }</h1>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ () => dispatch(setActivePage('mainPage')) }
                    >BACK</Button>
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
                </>)
    };
    const itemPage = () => {
        return (<>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ () => dispatch(setActivePage('productsPage')) }
                    >BACK</Button>
                    <Product
                        image={ selectedProduct.image }
                        title={ selectedProduct.title }
                        description={ selectedProduct.description }
                        price={ selectedProduct.price }
                    />
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

    return (
        <div className={classes.root}>
            { pageSelector() }
        </div>
    )
}

export default App;
