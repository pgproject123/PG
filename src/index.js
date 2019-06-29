import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import userSignupData from './store/reducers/formReducer'

import './index.css'
import App from './App'

const rootReducer = combineReducers({
    signUp: userSignupData,
})

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    
);

ReactDom.render(app, document.getElementById("root"));