import React, { Component } from 'react'
import classes from './FlatList.css';
import FlatCard from './Flatcard/Flatcard';



class FlatList extends Component {
    render() {
        return (
            <div className={classes.mainFlatlist}>
                <p> Showing all 12 properties near you </p>
                <div className={classes.sort}>
                    <p> Sort by  </p>
                    <ul>
                        <li> Rating </li>
                        <li className={classes.price}>Price-- <p> Low to high</p></li>
                        <li className={classes.price}>Price-- <p> High to low</p></li>
                        <li> Distance </li>
                    </ul>
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
                    <FlatCard />

                </div>
            </div>
        );
    }
}

export default FlatList;