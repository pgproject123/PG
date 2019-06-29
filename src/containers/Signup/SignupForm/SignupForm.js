import React from 'react'
import { connect } from 'react-redux'
import Form from '../../../components/reusables/Form';

const SignupForm = (props) => {
    const elements = { ...props.signupForm.elements }

    return (
        <Form
            label="Signup"
            name="signup"
            elements={elements}
        />
    );
}

const mapStateToProps = state => {
    return {
        signupForm: state.signUp.signupForm,
    }
}

export default connect(mapStateToProps)(SignupForm);