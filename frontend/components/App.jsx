import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import SignupFormContent from './session/signup-form-content';
import LoginFormContent from './session/login_form_content';
import DashboardContainer from '../components/dashboard/dashboard_container';
import AllExercisesContainer from '../components/exercises/all_exercises_container';
import ProfileContainer from './profile/profile_container';
import ExerciseCategoriesContainer from '../components/exercise_categories/exercise_categories_container';
import WorkoutFormContainer from '../components/workouts/workout_form_container';
import CategoryShowContainer from '../components/exercise_categories/category_show_container';
import AllWorkoutsContainer from '../components/workouts/all_workouts_container';
import UserExerciseFormContainer from '../components/exercises/user_exercise_form_container';
import WorkoutLogFormContainer from '../components/workout_logs/workout_log_form_container';
import WorkoutLogShowContainer from '../components/workout_logs/workout_log_show_container';
import UpdateEmailContainer from '../components/profile/update_email_container';
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
        <ProtectedRoute exact path='/exercises/all' component={AllExercisesContainer} />
        <ProtectedRoute exact path='/exercises/new' component={UserExerciseFormContainer} />
        <ProtectedRoute exact path='/profile' component={ProfileContainer} />
        <ProtectedRoute exact path='/profile/email' component={UpdateEmailContainer} />
        <Switch>
            <ProtectedRoute exact path='/categories/all' component={ExerciseCategoriesContainer} />
            <ProtectedRoute exact path='/categories/:categoryName' component={CategoryShowContainer} />
        </Switch>
    </div>
);
   

export default App;

