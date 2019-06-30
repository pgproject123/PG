import React, { Component } from 'react';
import classes from './FlatDetail.css'

const FlatDetail = (props) => {
    return (
        <div className={classes.flatDetail}>
            <div className={classes.divname}>
                <p > {props.name} </p>
            </div>

            <div className={classes.priceDetails}>
                <p> {props.price} </p>
            </div>

        </div>
    );
}

export default FlatDetail;