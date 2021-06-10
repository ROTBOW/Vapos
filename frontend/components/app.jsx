import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginFormContaniner from './session/login_form_container'
import SignUpFormContainer from './users/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import { ProtectedRoute, AuthRoute } from '../util/route_utils';

import StoreHomePageContainer from './games/store_home_page_container';
import GamePageContainer from './games/game_show_container';
import wishlistContainer from './wishlist/wishlist_container';
import CartContainer from './cart/cart_container';



// ProtectedRoute means you have to be logged on to see it
// AuthRoute means you have to be logged off to see it

class App extends React.Component {

    render(){
        return (
                <div>       
                        <Route path='/' component={NavbarContainer}/>

                    <Switch>
                        <AuthRoute path='/login' component={LoginFormContaniner}/>
                        <AuthRoute path='/user/new' component={SignUpFormContainer}/>
                        <ProtectedRoute path='/wishlist' component={wishlistContainer}/>
                        <ProtectedRoute path='/cart' component={CartContainer}/>
                        <Route path='/games/:gameId' component={GamePageContainer}/>
                        <Route path='/' component={StoreHomePageContainer}/>
                        <Redirect to='/' />
                    </Switch>

                    
                </div>
        )
    }
}

export default App;