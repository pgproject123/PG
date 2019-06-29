import React, { Component } from 'react';
import classes from './Flatcard.css'
import FlatDetail from './FlatDetail/FlatDetail';

const FlatCard = (props) => {
    return (
        <div className={classes.flatcard}>
              <div className={classes.flatImg}>
                  
              </div>
              <FlatDetail
                name="Samarth Krupa"
                price="Rs 2000"
              />
        </div>
    );
}

export default FlatCard;