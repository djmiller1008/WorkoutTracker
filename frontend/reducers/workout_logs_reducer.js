import { 
    RECEIVE_WORKOUT_LOGS,
    RECEIVE_WORKOUT_LOG
} from "../actions/workout_log_actions";

const WorkoutLogsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKOUT_LOGS:
            return action.logs;
        case RECEIVE_WORKOUT_LOG:
         
            return Object.assign({}, state, { [action.log.id]: action.log })
        default:
            return state;
    };
};

export default WorkoutLogsReducer;