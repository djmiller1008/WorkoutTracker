import {
    RECEIVE_FOOD_LOG_ERRORS,
    CLEAR_FOOD_LOG_ERRORS
} from "../actions/food_log_actions";

const foodLogErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOOD_LOG_ERRORS:
            return action.errors;
        case CLEAR_FOOD_LOG_ERRORS:
            return [];
        default: 
            return state;
    }
};

export default foodLogErrorsReducer;
