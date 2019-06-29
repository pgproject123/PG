import React from 'react'
import classes from './Sidebar.css'
import FilterImg from '../../../assets/filter.png'
import * as actionTypes from '../../../store/actions/formActions'
import Form from '../../../components/reusables/Form';



class Sidebar extends React.Component {
    state = {
        sex: {
            elements: {
                men: actionTypes.inputObject( 'radio', 'men', 'sex', 'Men'),
                women: actionTypes.inputObject( 'radio', 'women','sex','Women'),
                unisex: actionTypes.inputObject( 'radio', 'unisex', 'sex', 'Unisex'),
            }
        },
            
        amnities: {
            elements: {
                wifi: actionTypes.inputObject( 'checkbox', 'wifi', 'Wifi'),
                food: actionTypes.inputObject( 'checkbox', 'food', 'Food'),
                tv : actionTypes.inputObject( 'checkbox', 'tv', 'TV'),
                ac: actionTypes.inputObject( 'checkbox', 'ac', 'AC'),
                parking: actionTypes.inputObject( 'checkbox', 'parking', 'Parking'),
            }
        }
    }

    render() {
        return (
             <div className={classes.mainSidebar}>
                 <div className={classes.heading}>                    
                    <img  className={classes.filterimg} src={FilterImg}/>
                    <p>Filter</p>
                 </div>
                 <Form 
                    elements={this.state.sex.elements}
                    formclass={classes.form}

                 />
                 <Form 
                    elements={this.state.amnities.elements}
                    formclass={classes.form}
                />
                 
             </div>
        );
    }
}

export  default Sidebar;