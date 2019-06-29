import React from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import classes from './Main.css'
import FlatList from './FlatList/FlatList';


class Main extends React.Component {
    render() {
        return (
             <div className={classes.main}>
                 <Header />
                 <div className={classes.contentbody}>
                    <Sidebar />
                    <FlatList />
                 </div>
             </div>
        );
    }
}

export default Main;