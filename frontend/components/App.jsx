import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import SignupFormContent from './session/signup-form-content';
import LoginFormContent from './session/login_form_content';
import DashboardContainer from '../components/dashboard/dashboard_container';
import WorkoutFormContainer from '../components/workouts/workout_form_container';
import AllWorkoutsContainer from '../components/workouts/all_workouts_container';
import WorkoutLogFormContainer from '../components/workout_logs/workout_log_form_container';
import WorkoutLogShowContainer from '../components/workout_logs/workout_log_show_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <AuthRoute exact path='/' component={Home} />
        <AuthRoute exact path='/signup' component={SignupFormContent} />
        <AuthRoute exact path='/login' component={LoginFormContent} />
        <ProtectedRoute path='/dashboard' component={DashboardContainer} />
        <ProtectedRoute path='/workouts/new' component={WorkoutFormContainer} />
        <ProtectedRoute exact path='/workouts/all' component={AllWorkoutsContainer} />
        <ProtectedRoute exact path='/workouts/:workoutId/workout_log' component={WorkoutLogShowContainer} />
        <ProtectedRoute exact path='/workouts/:workoutId/workout_log/new' component={WorkoutLogFormContainer} />
    </div>
);
   

export default App;

