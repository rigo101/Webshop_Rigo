import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import FilledCartIcon from '@material-ui/icons/ShoppingCart';
import EmptyCartIcon from '@material-ui/icons/ShoppingCartOutlined';

import { useSelector, useDispatch  } from 'react-redux';
import { setActivePage, setSearchTerm, setSelectedProductID, setCategory } from '../actions/AppActions';

const useStyles = makeStyles((theme) => ({
    Proot: { flexGrow: 1 },
    menuButton: {   marginRight: theme.spacing(2) },
    cartButton: {   marginLeft: theme.spacing(2) },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export const AppHeader = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const searchTerm = useSelector( state => state.searchTerm );
    const [cartOpen, setCartOpen] = useState(false);

    const handleCartClick = () =>{
        setCartOpen(cartOpen => !cartOpen);
    };

    return (
        <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={ () => {
                            dispatch(setSearchTerm(''));
                            dispatch(setActivePage('mainPage'));
                            dispatch(setSelectedProductID(null));
                            dispatch(setCategory(null));
                        }
                    }
                >
                    <HomeIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    MockShop
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                        value = { searchTerm }
                        onChange = { (event) => dispatch(setSearchTerm(event.target.value)) }                    />
                </div>
                <IconButton
                    edge="start"
                    className={classes.cartButton}
                    onClick={ handleCartClick }
                    color="inherit"
                    aria-label="open drawer"
                >
                    { cartOpen
                        ? <FilledCartIcon />
                        : <EmptyCartIcon />
                    }
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
  );
};