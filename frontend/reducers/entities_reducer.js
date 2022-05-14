import { combineReducers } from "redux";
import exercisesReducer from "./exercises_reducer";
import usersReducer from "./users_reducer";
import workoutsReducer from "./workouts_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    workouts: workoutsReducer,
    exercises: exercisesReducer
});

export default entitiesReducer;