import React, { Component } from 'react'
import classes from './Details.css'
import Header from './Header/Header'
import Images from './Images/Images';
import Features from './Features/Features';

class Details extends Component {
    render() {
        return (
             <div className={classes.mainDetails}>
                 <Header />
                 <div className={classes.bodyContent}>
                     <div className={classes.namePrice}>

                     </div>
                    <Images />
                    <Features />
                 </div>
             </div>
        );
    }
}

export default Details;