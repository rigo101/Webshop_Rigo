import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';

import Backdrop from '@material-ui/core/Backdrop';

// import GenericCard from './GenericCard';
// import { setCategory, setActivePage } from '../actions/AppActions';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const SearchOverlay = () => {
    const classes = useStyles();
    const searchTerm = useSelector( state => state.searchTerm );

    return (<Backdrop className={classes.backdrop} open={ searchTerm !== '' }>
                HELLO!
            </Backdrop>)
};