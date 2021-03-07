import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { setSearchTerm } from '../actions/AppActions';

import Typography from '@material-ui/core/Typography';

import GenericCard from './GenericCard';
// import { setCategory, setActivePage } from '../actions/AppActions';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: 'calc(100vh - 64px)',
        textAlign: 'right',
        backgroundColor: '#dadada',
        zIndex: 1500,
        color: '#fff',
    },
    hideOverlay: {
        display: 'none'
    },
    clear: {
        padding: '16px',
    },
    searchResults: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}));

export const SearchOverlay = () => {
    const classes = useStyles();
    const searchTerm = useSelector( state => state.searchTerm );
    const dispatch = useDispatch();

    const searchResult = useSelector( state =>
        searchTerm.length > 2 && Object.values(state.productsByID).filter( product => {
            return  product.title.includes(searchTerm) ||
                    product.description.includes(searchTerm) ||
                    product.category.includes(searchTerm);
        }
    ));

    return (<div className={`${classes.overlay} ${searchTerm || classes.hideOverlay}`}>
                <Typography className={classes.clear} noWrap onClick={() => dispatch(setSearchTerm(''))}>
                    CLEAR SEARCH FIELD
                </Typography>
                <div className={ classes.searchResults }>
                    { searchResult &&
                        searchResult.map( (item) => {
                            return (
                                <GenericCard
                                    id={ item.id }
                                    key={ item.id }
                                    url = { item.image }
                                    name = { item.title }
                                    category = { item.category }
                                    onClick = { () => console.log('Not yet!')}
                                />)
                            })
                    }
                </div>
            </div>)
};
