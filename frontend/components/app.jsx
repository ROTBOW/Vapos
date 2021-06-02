import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './navbar/navbar';
import LoginFormContaniner from './session/login_form_container'

class App extends React.Component {

    render(){
        return (
                <div>

                    <Link to='/'><h1>Welcome to Vapos!</h1></Link>
                    {/* <NavBar/> */}
                    <Switch>
                        <Route exact path='/login' component={LoginFormContaniner}/>
                        <Route path='/' component={NavBar}/>
                    </Switch>

                    
                </div>
        )
    }
}

export default App;