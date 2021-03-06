import React from 'react';

import {connect} from 'react-redux';
import {Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.sessionUser)
})

// <AuthRoute path='' componet={} />


const Auth = ({loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to='/'/> : <Component {...props}/>
        )}
    />
);


const Protected = ({loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            !loggedIn ? <Redirect to='/user/new'/> : <Component {...props}/>
        )}
    />
); 


export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));