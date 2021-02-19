import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/actions';
import { setCategory, displayProducts, displayMain, displayItem } from '../actions/AppActions';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GenericCard from './GenericCard';
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

    const handleClick = (categoryName) => {
        dispatch(setCategory(categoryName));
        dispatch(displayProducts());
    };
    const handleBackToMainClick = () => {
        dispatch(displayMain());
    };
    const handleItemClick = () => {
        dispatch(displayItem());
    };
    const handleBackToProductsClick = () => {
        dispatch(displayProducts());
    };
    const generateMainPage = (products) => {
        return Object.keys(products).map( (category) => {
            return <GenericCard
              key={ category }
              url = { products[category][0].image }
              name = { category }
              category = { category }
              onClick = { handleClick }
            />
        })
    };

    const productsFactory = (items) => {
        return items.map( (item) => {
            return (
                <GenericCard
                    key={ item.id }
                    url = { item.image }
                    name = { item.title }
                    category = { item.category }
                    onClick = { handleItemClick }
                />
        )})
    };

    const mainPage = () => {
        return (<>
                    <h1>Categories</h1>
                    { generateMainPage(products) }
                </>)
    };
    const productsPage = () => {
        return (<>
                    <h1>{ categoryHeading }</h1>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ handleBackToMainClick }
                    >BACK</Button>
                    { productsFactory(items) }
                </>)
    };
    const itemPage = () => {
        return (<>
                    <h1>ITEM</h1>;
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ handleBackToProductsClick }
                    >BACK</Button>
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
