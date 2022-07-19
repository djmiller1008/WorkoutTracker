import {
    RECEIVE_USER_EXERCISE,
    RECEIVE_USER_EXERCISES
} from "../actions/user_exercise_actions";

const userExercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_EXERCISE:
            return action.exercise;
        case RECEIVE_USER_EXERCISES:
            return action.exercises;
        default:
            return state;
    }
};

export default userExercisesReducer;