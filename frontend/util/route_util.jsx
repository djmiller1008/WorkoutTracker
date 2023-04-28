import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});
 
const Auth = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to='/dashboard' />}
    /> 
);

const Protected = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            loggedIn ? <Component {...props} /> : <Redirect to ='/login' />}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));