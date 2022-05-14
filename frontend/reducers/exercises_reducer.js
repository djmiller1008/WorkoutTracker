import { 
    RECEIVE_EXERCISES,
    RECEIVE_EXERCISE,
    CLEAR_EXERCISES 
} from "../actions/exercise_actions";

const exercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EXERCISES:
            return action.exercises;
        case RECEIVE_EXERCISE:
            return Object.assign({}, state, action.exercise)
        case CLEAR_EXERCISES:
            return {};
        default:
            return state;
    };
};

export default exercisesReducer;