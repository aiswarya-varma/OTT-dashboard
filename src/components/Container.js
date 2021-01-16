/**
 * A container component
 */

import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import Tiles from './Tiles.js';
import { getDataSet } from '../redux/action.js';

/**
 * Load data and display them as tiles
 */
class TileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: 1,
            show: true,
        }
        this.intersectionRef = React.createRef();
        this.restore = this.restore.bind(this);
    }

    componentDidMount() {
        /** Infinite scrolling */
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    if ((this.props.count === 0 || this.props.tileContent.length < this.props.count)) {
                        this.props.getDataSet(this.state.dataSet);
                        this.setState({ dataSet: this.state.dataSet + 1 });
                        setTimeout(() => {
                            this.setState({ show: false });
                        }, 1000)
                    }
                }
            });
        });
        this.observer.observe(this.intersectionRef.current);
    }

    restore() {
        this.setState({ dataSet: 1 }, () => {
            this.props.getDataSet(this.state.dataSet);
            this.observer.observe(this.intersectionRef.current);
        });
    }

    render() {
        return (
            <>
                <Navbar handleRestore={() => this.restore()} />
                <Box mt="130px" mx="20px" id="container">
                    <div className={`overlay ${this.state.show ? "shown" : "hidden"}`}
                        style={{ display: this.state.show ? 'block' : 'none', }} ></div>
                    <Grid container spacing={2}>
                        {this.props.tileContent.length ?
                            this.props.tileContent.map((d, i) => <Tiles key={i} tiles={d} />) :
                            <Box display="flex" justifyContent="center">Oops! No Results</Box>
                        }
                    </Grid>
                </Box >
                {
                    !this.props.isSearching &&
                    <div id="intersection-div" style={{ border: '1px solid #171717' }} ref={this.intersectionRef}></div>
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        tileContent: state.data,
        count: state.count,
        isSearching: state.searching,
    }
}

export default connect(mapStateToProps, { getDataSet })(TileContainer);