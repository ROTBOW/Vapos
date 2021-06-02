import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './navbar/navbar';
import LoginFormContaniner from './session/login_form_container'
import SignUpFormContainer from './users/signup_form_container';


import vaposLogo from '../../app/assets/images/ui/logo_vapos.png';
console.log(vaposLogo)

class App extends React.Component {

    render(){
        return (
                <div>

                    <Link to='/'><img scr={vaposLogo} alt='Vapos logo'/></Link>

                    

                        <Route path='/' component={NavBar}/>

                    <Switch>
                        <Route exact path='/login' component={LoginFormContaniner}/>
                        <Route exact path='/user/new' component={SignUpFormContainer}/>
                    </Switch>

                    
                </div>
        )
    }
}

export default App;