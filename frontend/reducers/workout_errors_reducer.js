import { RECEIVE_WORKOUT_ERRORS } from '../actions/workout_actions';

const workoutErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKOUT_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default workoutErrorsReducer;