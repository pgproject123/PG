export const SUBMIT_SIGNUP_DATA = 'SUBMIT_SIGNUP_DATA';
export const HANDLE_CHANGE = 'HANDLE_CHANGE'

export const submitSignupData = () => {
    return {
        type: SUBMIT_SIGNUP_DATA,
    }
}

export const handleChange = (event, element, form) => {
    return {
        type: HANDLE_CHANGE,
        load: {
            value: event.target.value,
            element,
            form
        }
    }
}

export const inputObject = (elementType, ...args) => {

    switch(elementType) {
        case 'input':
            return {
                elementType,
                elementConfig: {
                    type: args[0],
                    placeholder: args[1]
                },
                value: ''
            }
        case 'select':
            return {
                elementType,
                elementConfig: {
                    options: [
                        ...args
                    ]
                },
                value:''
            }
        case 'checkbox':
            return {
                elementType,
                elementConfig: {
                    type: elementType,
                },
                value: args[0],
                label: args[1],
            }
        
        case 'radio':
            return {
                elementType,
                elementConfig: {
                    type: elementType,
                    name: args[1]
                },                
                value: args[0],
                label: args[2],
            }

        default:
            return null;
    }
}