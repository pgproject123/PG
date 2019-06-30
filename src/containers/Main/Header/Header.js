import React, { Component } from 'react'
import classes from './Header.css'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.sidebar}>

            </div>
            <div className={classes.title}>
                <h1>{props.title}</h1>
            </div>
            <div className={classes.options}>
                <p> Login </p> <p> Logout </p>
            </div>

        </div>
    )
}

export default Header;
