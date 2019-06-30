import React, { Component } from 'react'
import classes from './Details.css'
import Header from './Header/Header'
import FlatInfo from './FlatInfo/FlatInfo';
import FlatName from './FlatName/FlatName';
import ReviewBox from './ReviewBox/ReviewBox';

class Details extends Component {
    render() {
        return (
            <div className={classes.mainDetails}>
                <Header 
                    title="Home"
                />
                <div className={classes.bodyContent}>
                    <div className={classes.nav}>

                    </div>
                    <FlatName />
                    <FlatInfo />
                    <ReviewBox />
                </div>
            </div>
        );
    }
}

export default Details;