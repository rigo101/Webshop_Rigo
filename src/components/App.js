import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsActions';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CategoriesList from './CategoriesList';

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

    const status = useSelector( state => state.status );
    const products = useSelector( state => state.products );

    const categoryFactory = (products) => {
        return Object.keys(products).map( (category, index) => {
            return <CategoriesList
              key={ index }
              url = { products[category][0].image }
              name = { category }
            />
        })
    };

    return (
        <div className={classes.root}>
            { status.loading
                ? <CircularProgress />
                : <> { categoryFactory(products) } </>
            }
        </div>
    )
}

export default App;
