import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './home/home';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import WorkoutIndexContainer from './workout/workout_index_container';
import WorkoutShowContainer from './workout/workout_show_container';
import WorkoutFormContainer from './workout/workout_form_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <GreetingContainer />
        
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <ProtectedRoute exact path='/workouts' component={WorkoutIndexContainer} />
        <Switch>
            <ProtectedRoute path ='/workouts/new' component={WorkoutFormContainer} />
            <ProtectedRoute exact path='/workouts/:workoutId' component={WorkoutShowContainer} />
            <Route exact path='/' component={Home} />
        </Switch>
       
        
    </div>
);
   

export default App;

