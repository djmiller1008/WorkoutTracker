import * as APIUtil from "../util/user_exercise_api_util";

export const RECEIVE_USER_EXERCISE = "RECEIVE_USER_EXERCISE";

export const receiveUserExercise = exercise => ({
    type: RECEIVE_USER_EXERCISE,
    exercise
});

export const createUserExercise = exercise => dispatch => (
    APIUtil.createUserExercise(exercise)
        .then(exercise => dispatch(receiveUserExercise(exercise)))
);