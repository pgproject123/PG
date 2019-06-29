import React, { Component } from 'react';
import classes from './Input.css'
import Aux from '../hoc/Aux';

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <input
                    className={classes.input}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            )
            break;

        case ('select'):
            inputElement = (
                <select
                    className={classes.select}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        )
                    })}

                </select>
            )
            break;

        case ('checkbox'):
            inputElement = (
                <div className={classes.checkbox}>
                    <input
                        {...props.elementConfig}
                        value={props.value}
                    /><label> {props.label} </label>
                </div>

            )
            break;
        case ('radio'):
            inputElement = (
                <div className={classes.checkbox}>
                    <input
                        {...props.elementConfig}
                        value={props.value}
                    /><label> {props.label} </label>
                </div>

            )
            break;
        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
            />;
            break;


    }

    return (
        <Aux>
            {inputElement}
        </Aux>
    );
}

export default input;