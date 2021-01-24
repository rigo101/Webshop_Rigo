import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 256,
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(4)
    },
    media: {
        height: 140,
    }
}));

const CategoriesList = ({ url, name }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {name.toUpperCase()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CategoriesList;