import React, { Component } from 'react'
import classes from './Header.css'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.title}>
                <h1>{props.title}</h1>
            </div>
            <div className={classes.options}>
                <p> Login </p> <p> Log out </p>
            </div>

        </div>
    )
}

export default Header;
