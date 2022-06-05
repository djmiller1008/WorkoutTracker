import { 
    RECEIVE_WORKOUTS,
    RECEIVE_WORKOUT,
    CLEAR_WORKOUTS,
} from "../actions/workout_actions";

const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKOUTS:
            return action.workouts;
        case RECEIVE_WORKOUT:
            return action.workout;
        case CLEAR_WORKOUTS:
            return {};
        default:
            return state;
    };
};

export default workoutsReducer;