import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/actions';
import { setCategory } from '../actions/AppActions';

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

    const status = useSelector( state => state.status );
    const products = useSelector( state => state.products );
    const items = useSelector( state => state.products[state.category] );

    const handleClick = (categoryName) => {
        dispatch(setCategory(categoryName));
    };

    const categoryFactory = (products) => {
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

    const itemFactory = (items) => {
        return items.map( (item) => {
            return (
                <GenericCard
                    key={ item.id }
                    url = { item.image }
                    name = { item.title }
                    category = { item.category }
                    onClick = { handleClick }
                />
        )})
    };

    const cardFactory = () => {
        return items
            ?   <>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={ handleClick }
                    >BACK</Button>
                    { itemFactory(items) }
                </>
            : categoryFactory(products)
    };

    return (
        <div className={classes.root}>
            { status.loading
                ? <CircularProgress />
                : cardFactory()
            }
        </div>
    )
}

export default App;
