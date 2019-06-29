import * as actionTypes from '../actions/formActions'

const initialState = {
    signupForm: {
        elements: {
            option: actionTypes.inputObject('select',
                { value: 'owner', displayValue: 'Owner', },
                { value: 'user', displayValue: 'User', }),
            username: actionTypes.inputObject('input', 'text', 'Username'),
            password: actionTypes.inputObject('input', 'password', 'Password'),
            email: actionTypes.inputObject('input', 'email', 'Email'),

        }

    },

    loginForm: {
        elements: {
            loginUsername: actionTypes.inputObject('input', 'text', 'Username'),
            loginPassword: actionTypes.inputObject('input', 'password', 'Password'),
        }
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HANDLE_CHANGE: {
            if(action.load.form === 'signup') {
                const updatedElements = { ...state.signupForm.elements }
                updatedElements[action.load.element].value = action.load.value
                const updatedForm = { ...state.signupForm }
                updatedForm.elements = { ...updatedElements }

                return {
                    ...state,
                    signupForm: {
                        ...updatedForm,
                        elements: {
                            ...updatedElements
                        }
                    }
                }
            }

            else {
                const updatedElements = { ...state.loginForm.elements }
                updatedElements[action.load.element].value = action.load.value
                const updatedForm = { ...state.loginForm }
                updatedForm.elements = { ...updatedElements }

                return {
                    ...state,
                    loginForm: {
                        ...updatedForm,
                        elements: {
                            ...updatedElements
                        }
                    }
                }
            }
            
            
        }

        default:
            return state;
    }
}

export default reducer;