import React from 'react';
import classes from './Features.css'

const Features = (props) => {
    return (
        <div className={classes.features}>
            <p> Rating - 3.5/5 </p>
            <p> Men Only</p>
            <p> Amnitites </p>
            <ul>
                <li> Wifi </li>
                <li> Food </li>
                <li> TV </li>
                <li> AC </li>
                <li> Parking </li>
            </ul>
            <p className={classes.contact}> Contact - 8806850222 </p>
        </div>
    );
}

export default Features;