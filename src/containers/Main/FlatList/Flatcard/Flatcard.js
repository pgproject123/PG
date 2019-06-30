import React, { Component } from 'react';
import classes from './Flatcard.css'
import FlatDetail from './FlatDetail/FlatDetail';
import {withRouter} from 'react-router-dom';
import Image from '../../../../assets/flat.jpg'

const FlatCard = (props) => {
    return (
        <div className={classes.flatcard} onClick={() => props.history.push('/detail')}>
              <div className={classes.flatImg}>
                  <img src={Image}/>
              </div>
              <FlatDetail
                name="MY FLAT"
                price="Rs 2000"
              />
        </div>
    );
}

export default withRouter(FlatCard);