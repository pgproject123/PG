import React from 'react'
import classes from './Form.css'
import Input from './Input'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/formActions'

const Form = (props) => {
    
    const elements = { ...props.elements }
    let formStyle = classes.form;
    
    if(props.formclass) {
        formStyle = props.formclass;
    }
    
    return (
        <form className={formStyle}>
                {Object.keys(elements).map((element, i) => {
                    return (
                        <Input
                            key={i} 
                            elementType={elements[element].elementType}
                            elementConfig={elements[element].elementConfig}
                            value={elements[element].value}
                            changed={() => props.dispatch(actionCreators.handleChange(event, element, props.name))}
                            label={elements[element].label}
                        />
                    )
                })}
                {/* <button className={classes.formButton}> Submit </button>  */}
        </form>
    );
}


export default connect()(Form);