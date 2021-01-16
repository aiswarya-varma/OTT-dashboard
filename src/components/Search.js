/**
 * Search Component
 * 
 * Enables searching among titles
 */

import { Box, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchInDataSet, setSearching, restore } from '../redux/action.js';
import search from '../images/search.png';

/**
 * Custom component styles
 */
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    searchbar: {
        borderBottom: "1px solid #FFFFFF",
    },
    hide: {
        display: "none",
    },
    open: {
        display: "block",

    },
    img: {
        height: "20px",
        width: "20px",
    },
    white: {
        color: "#FFFFFF",
    },
    closeButton: {
        paddingTop: "10px",
        color: "#FFFFFF",
    },
}));

/**
 * Handles search
 * @param {Object} props the component props
 */
const Search = props => {
    const classes = useStyles();
    const [searchBy, setSearchBy] = useState(""); /** user input string */
    const [showInput, setShow] = useState(false); /** show/hide search textbox */

    /**
     * Do the search based on input string
     */
    const doSearch = () => {
        if (searchBy.length === 0)
            return;

        props.setSearching(true);
        props.searchInDataSet(searchBy);
    }

    /**
     * Handle Search icon click - Show textbox 
     */
    const handleClick = () => {
        setShow(true);
    }

    /**
     * Handle close button click
     */
    const handleClose = () => {
        setShow(false);
        setSearchBy("");
        props.setSearching(false);
        props.restore();
        props.handleRestore();
    }

    return (
        <Box className={classes.root} display="flex" justifyContent="flex-end">
            <div className={`${showInput ? classes.hide : classes.open}`}>
                <img src={search} alt="search" className={classes.img} onClick={() => handleClick()} />
            </div>
            <Box className={`${showInput ? classes.open : classes.hide}`}>
                <Grid container>
                    <Grid item xs={10}>
                        <TextField
                            style={{ margin: 8 }}
                            placeholder="Search"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                className: classes.white
                            }}
                            className={classes.searchbar}
                            value={searchBy}
                            onChange={(e) => setSearchBy(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter")
                                    doSearch();
                            }}
                        /></Grid>
                    <Grid item xs={2} >
                        <CloseIcon className={classes.closeButton} onClick={() => handleClose()} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default connect(null, { searchInDataSet, setSearching, restore })(Search);