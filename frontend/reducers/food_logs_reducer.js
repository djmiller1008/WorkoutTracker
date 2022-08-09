import {
    RECEIVE_FOOD_LOGS
} from "../actions/food_log_actions"

const foodLogsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOOD_LOGS:
            return action.foodLogs;
        default: 
            return state;
    }
}

export default foodLogsReducer;