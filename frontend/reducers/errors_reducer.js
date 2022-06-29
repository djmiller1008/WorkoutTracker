import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import workoutErrorsReducer from "./workout_errors_reducer";
import accountUpdateErrorsReducer from "./account_update_errors";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    workout: workoutErrorsReducer,
    account: accountUpdateErrorsReducer
});

export default errorsReducer;