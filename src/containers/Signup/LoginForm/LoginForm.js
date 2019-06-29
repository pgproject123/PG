import React from 'react'
import { connect } from 'react-redux'
import Form from '../../../components/reusables/Form';



const LoginForm = (props) => {
    const elements = { ...props.loginForm.elements }
    return (
        <Form
            label="Login"
            name="login"
            elements={elements}
        />
    );

}

const mapStateToProps = state => {
    return {
        loginForm: state.signUp.loginForm,
    }
}

export default connect(mapStateToProps)(LoginForm);