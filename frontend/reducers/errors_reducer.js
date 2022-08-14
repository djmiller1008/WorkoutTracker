import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import workoutErrorsReducer from "./workout_errors_reducer";
import accountUpdateErrorsReducer from "./account_update_errors";
import foodDiaryErrorsReducer from "./food_diary_errors_reducer";
import foodLogErrorsReducer from "./food_log_errors_reducer";
import foodItemErrorsReducer from "./food_items_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    workout: workoutErrorsReducer,
    account: accountUpdateErrorsReducer,
    foodDiary: foodDiaryErrorsReducer,
    foodLog: foodLogErrorsReducer,
    foodItem: foodItemErrorsReducer
});

export default errorsReducer;