import React, { useState } from 'react';

import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { green, grey } from '@material-ui/core/colors';

import { useDispatch  } from 'react-redux';
import { addToCart } from '../actions/AppActions';


const MIN_QTY = 1;
const MAX_QTY = 16;

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 0,
        paddingTop: '36px',
        paddingBottom: '32px'
    },
    media: {
        width: '250px',
        height: '210px'
    },
    header: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    headerText: {
        margin: theme.spacing(2),
        flex: '1'
    },
    description: {
        margin: theme.spacing(2),
        fontSize: '18px',
        color: '#8d8881'
    },
    h5: {
        marginBottom: theme.spacing(2),
        fontSize: '18px',
        color: '#8d8881'
    },
    marginRight: {
        marginRight: theme.spacing(3),
    },
    marginTop: {
        marginTop: theme.spacing(2),
    },
    quantity : {
        padding: '9px 0 7px'
    }
}));

const Product = ({ id, image, title, description, price, category }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    const needsSize = (category ==="men clothing" || category ==="women clothing" );
    const [size, setSize] = useState( needsSize ? 'S' : undefined );

    const handleOnQtyChange = (event) => {
        const input = parseInt(event.target.value);
        setQty(input <= MIN_QTY ? MIN_QTY : input >= MAX_QTY ? MAX_QTY : input);
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <CardMedia
                    className={classes.media}
                    image={ image }
                    title="Item"
                />
                <div className={classes.headerText}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                        {`Price: $${price}`}
                    </Typography>
                    <div>
                        { needsSize &&
                            <FormControl className={classes.marginRight}>
                                <InputLabel htmlFor="demo-customized-select-native">Size</InputLabel>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    input={<BootstrapInput />}
                                    onChange={ (event) => setSize(event.target.value) }
                                >
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                </NativeSelect>
                            </FormControl>
                        }
                        <FormControl className={classes.marginRight}>
                            <InputLabel htmlFor="quantity">Quantity</InputLabel>
                            <Input
                                id="quantity"
                                className={classes.quantity}
                                aria-describedby="my-helper-text"
                                type="number"
                                inputProps={{ min: MIN_QTY, max: MAX_QTY }}
                                value={qty}
                                onChange={ handleOnQtyChange }
                            />
                        </FormControl>
                    </div>
                    <Button
                        variant='contained'
                        style={{ backgroundColor: green[500], color: grey[50] }}
                        className={classes.marginTop}
                        onClick={() => dispatch(addToCart({id, qty, size}))}>
                        Add to cart
                    </Button>
                </div>
            </div>
            <Typography gutterBottom variant="h5" component="h2" className={classes.description}>
                {description}
            </Typography>
        </div>
    )
}

export default Product;