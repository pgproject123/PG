import React, { Component } from 'react';
import classes from './Footer.css'
import cc from '../../../assets/cc.jpg'

const Footer = (props) => {
    return (
        <div className={classes.main}>
            {/* <img src={cc} className={classes.cc}/> */}
            <a href="#"> Terms </a>
            <a href="#"> Help </a>
        </div>
    )
}

export default Footer;