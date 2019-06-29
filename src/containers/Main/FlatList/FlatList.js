import React, { Component } from 'react'
import classes from './FlatList.css';
import FlatCard from './Flatcard/Flatcard';



class FlatList extends Component {
    render() {
        return (
             <div className={classes.mainFlatlist}>
                <div className={classes.details}>

                </div>
                <div className={classes.elements}>
                    {/* <FlatRow />
                    <FlatRow /> */}
                    <FlatCard />
                    <FlatCard />
                    <FlatCard />
                    <FlatCard />
                    <FlatCard />
                    <FlatCard />
                    <FlatCard />
                    
                </div>
             </div>
        );
    }
} 

export default FlatList;