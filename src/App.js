import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Signup from './containers/Signup/Signup';
import Main from './containers/Main/Main';
import Details from './containers/Details/Details';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/" component={Main} />
                    <Route path="/detail" component={Details} />
                </Switch>
            </BrowserRouter>
        )
    }

}


export default App;