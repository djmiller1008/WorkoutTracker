import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import workoutErrorsReducer from "./workout_errors_reducer";
import accountUpdateErrorsReducer from "./account_update_errors";
import foodDiaryErrorsReducer from "./food_diary_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    workout: workoutErrorsReducer,
    account: accountUpdateErrorsReducer,
    foodDiary: foodDiaryErrorsReducer
});

export default errorsReducer;