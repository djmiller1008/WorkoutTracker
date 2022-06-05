import { combineReducers } from "redux";
import exercisesReducer from "./exercises_reducer";
import exerciseCategoriesReducer from "./exercise_categories_reducer";
import usersReducer from "./users_reducer";
import workoutsReducer from "./workouts_reducer";
import WorkoutLogsReducer from "./workout_logs_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    workouts: workoutsReducer,
    exercises: exercisesReducer,
    workoutLogs: WorkoutLogsReducer,
    exerciseCategories: exerciseCategoriesReducer
});

export default entitiesReducer;