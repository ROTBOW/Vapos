import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import LoginFormContaniner from './session/login_form_container'
import SignUpFormContainer from './users/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import { ProtectedRoute, AuthRoute } from '../util/route_utils';
import PageNotFound from './errors/404_page'
import AlertList from './errors/alert_lists';


// ProtectedRoute means you have to be logged on to see it
// AuthRoute is the opposite

const Temp = () => (
    <h1>this is a 404 error bro</h1>
)

class App extends React.Component {

    render(){
        return (
                <div>       
                        <Route path='/' component={NavbarContainer}/>

                    <Switch>
                        <Route path='/alert' render={(props) => (<AlertList messages={['bro']}/>)}/>
                        <AuthRoute path='/login' component={LoginFormContaniner}/>
                        <AuthRoute path='/user/new' component={SignUpFormContainer}/>
                        <Redirect to='/' />
                    </Switch>

                    
                </div>
        )
    }
}

export default App;