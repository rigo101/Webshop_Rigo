import React from 'react';

import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';


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
        width: '280px',
        height: '100%',
        margin: theme.spacing(1)
    },
    media: {
        width: '250px',
        height: '210px'
    },
    h5: {
        fontSize: '18px',
        height: '98px',
        textTransform: 'capitalize'
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const Product = ({ image, title, description, price, category }) => {
    const classes = useStyles();

    return (
        <>
            <CardMedia
                className={ classes.media }
                image={ image }
                title="Paella dish"
            />
            <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                {`Price: $${price}`}
            </Typography>
            {(category ==="men clothing" || category ==="women clothing" ) &&
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Size</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        input={<BootstrapInput />}
                    >
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </NativeSelect>
                </FormControl>
            }
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="quantity">Quantity</InputLabel>
                <Input id="quantity" aria-describedby="my-helper-text" type="number" inputProps={{ min: 1, max: 15 }} />
            </FormControl>
            <Button variant='contained' color="secondary">Add to cart</Button>
        </>
    )
}

export default Product;