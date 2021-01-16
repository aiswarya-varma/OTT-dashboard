/**
 * Navbar component
 */

import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Search from './Search.js';
import back from '../images/Back.png';
import navbar from '../images/nav_bar.png';

/**
 * Custom component styles
 */
const useStyles = makeStyles({
    navbar: {
        overflow: "hidden",
        backgroundImage: `url(${navbar})`,
        position: "fixed",
        top: 0,
        height: "150px",
        width: "100%",
    },
    img: {
        height: "20px",
        width: "20px",
    },
    header: {
        fontFamily: 'Titillium',
    }
});

const Navbar = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.navbar} display="flex" alignItems="center">
            <Box component={Grid} container mx="20px" display="flex" alignItems="center">
                {/** Back button */}
                <Box component={Grid} item xs={1} md={1}>
                    <img src={back} alt="go back" className={classes.img} />
                </Box>
                {/** Navbar heading */}
                <Grid item xs={7} md={6}>
                    <Typography variant="h6" className={classes.header}>
                        Romantic Comedies
                    </Typography>
                </Grid>
                {/** Search component container */}
                <Box component={Grid} item xs={4} md={5} display="flex" justifyContent="flex-end">
                    <Search handleRestore={() => props.handleRestore()} />
                </Box>
            </Box>
        </Box>
    );
}

export default Navbar;