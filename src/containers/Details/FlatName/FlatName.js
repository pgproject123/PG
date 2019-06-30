import React from 'react';
import classes from './FlatName.css'

const FlatName = (props) => (
    <div className={classes.namePrice}>
        <p> Smarth Krupa </p>
        <p id={classes.price}> Rs 6000 </p>
    </div>
)

export default FlatName;