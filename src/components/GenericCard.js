import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

const GenericCard = ({ url, name, category, onClick }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={ () => onClick(category)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default GenericCard;