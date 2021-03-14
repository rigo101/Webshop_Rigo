import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { useSelector, useDispatch  } from 'react-redux';
import { removeFromCart } from '../actions/AppActions';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        paddingTop: 80
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 100
    },
    drawerPaper: {
        width: drawerWidth,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(2)
    },
    icon: {
        fontSize: 26
    }
}));

const CartDrawer = ({open}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cartArray = useSelector( state => Object.entries(state.cart));
    const productsByID = useSelector( state => state.productsByID);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
            <List className={classes.root}>
                { cartArray.map(([key, value]) => {
                    const id = (key.substr(0, key.indexOf('_')));
                    const product = productsByID[id];
                    const size = key.substr(key.indexOf('_')+1);
                    const details = size === 'undefined'
                                        ? `Quantity: ${value}`
                                        : `Quantity: ${value}\u00A0\u00A0\u00A0\u00A0Size: ${size}`;
                    return (
                        <ListItem key={ key }>
                            <ListItemAvatar>
                                <Avatar alt="Product" src={ product.image } className={classes.large}/>
                            </ListItemAvatar>
                            <ListItemText primary={ product.title } secondary={ details } />
                                <IconButton
                                    edge="start"
                                    style={ {padding: 0} }
                                    color="secondary"
                                    aria-label="Remove from cart"
                                    onClick={ () => dispatch(removeFromCart(key)) }
                                >
                                    <DeleteIcon className={classes.icon}/>
                                </IconButton>
                            </ListItem>)
                    })
                }
            </List>
          </Drawer>
      </div>
  );
}

export default CartDrawer;