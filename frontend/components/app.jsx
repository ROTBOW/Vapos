import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import LoginFormContaniner from './session/login_form_container'
import SignUpFormContainer from './users/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import { ProtectedRoute, AuthRoute } from '../util/route_utils';

// ProtectedRoute means you have to be logged on to see it
// AuthRoute is the opposite

class App extends React.Component {

    render(){
        return (
                <div>

                    <Link to='/'><img src={window.vaposLogo} alt='Vapos logo'/></Link>

                    

                        <Route path='/' component={NavbarContainer}/>

                    <Switch>
                        <AuthRoute exact path='/login' component={LoginFormContaniner}/>
                        <AuthRoute exact path='/user/new' component={SignUpFormContainer}/>
                    </Switch>

                    
                </div>
        )
    }
}

export default App;