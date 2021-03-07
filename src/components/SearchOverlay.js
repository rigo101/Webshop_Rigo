import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { setSearchTerm } from '../actions/AppActions';

import Typography from '@material-ui/core/Typography';

// import GenericCard from './GenericCard';
// import { setCategory, setActivePage } from '../actions/AppActions';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: 'calc(100vh - 64px)',
        textAlign: 'right',
        opacity: '95%',
        backgroundColor: 'grey',
        zIndex: 1500,
        color: '#fff',
    },
    hideOverlay:{
        display: 'none'
    },
    clear: {
        padding: '16px',
    }
}));

export const SearchOverlay = () => {
    const classes = useStyles();
    const searchTerm = useSelector( state => state.searchTerm );
    const dispatch = useDispatch();

    return (<div className={`${classes.overlay} ${searchTerm || classes.hideOverlay}`}>
                <Typography className={classes.clear} noWrap onClick={() => dispatch(setSearchTerm(''))}>
                    CLEAR SEARCH FIELD
                </Typography>
            </div>)
};
