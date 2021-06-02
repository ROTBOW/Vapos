import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './navbar/navbar';
import LoginFormContaniner from './session/login_form_container'

// import vaposLogo from '../../app/assets/images/ui/logo_vapos.png'

class App extends React.Component {

    render(){
        return (
                <div>

                    <Link to='/'><h1>Welcome to Vapos</h1></Link>
                    {/* <NavBar/> */}

                    <Switch>
                        <Route exact path='/login' component={LoginFormContaniner}/>
                        <Route exact path='/user/new' component={LoginFormContaniner}/>
                        <Route path='/' component={NavBar}/>
                    </Switch>

                    
                </div>
        )
    }
}

export default App;