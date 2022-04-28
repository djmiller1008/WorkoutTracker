import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <GreetingContainer />
        <Route exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/login' component={LoginFormContainer} />
    </div>
);
   

export default App;

