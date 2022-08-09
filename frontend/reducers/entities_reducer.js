import { combineReducers } from "redux";
import exercisesReducer from "./exercises_reducer";
import exerciseCategoriesReducer from "./exercise_categories_reducer";
import foodDiariesReducer from "./food_diaries_reducer";
import foodItemsReducer from "./food_items_reducer";
import foodLogsReducer from "./food_logs_reducer";
import usersReducer from "./users_reducer";
import userExercisesReducer from "./user_exercises_reducer";
import workoutsReducer from "./workouts_reducer";
import WorkoutLogsReducer from "./workout_logs_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    workouts: workoutsReducer,
    exercises: exercisesReducer,
    workoutLogs: WorkoutLogsReducer,
    exerciseCategories: exerciseCategoriesReducer,
    userExercises: userExercisesReducer,
    foodItems: foodItemsReducer,
    foodDiaries: foodDiariesReducer,
    foodLogs: foodLogsReducer
});

export default entitiesReducer;