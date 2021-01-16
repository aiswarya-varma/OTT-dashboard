/**
 * A single tile component
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Typography } from '@material-ui/core';

/**
 * Custom styles for  the component
 */
const useStyles = makeStyles({
    container: {
        // height: "80%"
    },
    card: {
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        color: "#FFFFFF",
    },
    cardText: {
        paddingLeft: "5px",
        paddingTop: "7px",
        lineHeight: 1,
        overflow: "visible",
        fontFamily: 'Titillium',
    },
});

/**
 * Load data as tiles 
 * @param {Object} props the component props
 */
const Tiles = (props) => {
    const classes = useStyles();
    const { name } = props.tiles;

    return (
        <Grid item xs={4} md={2} >
            <div className={classes.container}>
                {/** Banner */}
                <Card className={classes.card} elevation={2} square>
                    <CardMedia
                        component="img"
                        alt={name}
                        image={props.tiles["poster-image"]}
                        title={name}
                        onError={(e) => { e.target.onerror = null; e.target.src = "./placeholder_for_missing_posters.png" }}
                        height="100%"
                        width="100%"
                    />
                </Card>
                {/** Title */}
                <Typography variant="body2" className={classes.cardText}>{name}</Typography>
            </div>
        </Grid >
    );
}

export default Tiles;