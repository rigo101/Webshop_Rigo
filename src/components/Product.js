import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    }
}));

const Product = ({ image, title, description, price }) => {
    const classes = useStyles();
// image, title, description, price

    return (
        <>
            <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                {price}
            </Typography>
        </>
    )
}

export default Product;