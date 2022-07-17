import {
    RECEIVE_USER_EXERCISE
} from "../actions/user_exercise_actions";

const userExercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_EXERCISE:
            return action.exercise;
        default:
            return state;
    }
};

export default userExercisesReducer;