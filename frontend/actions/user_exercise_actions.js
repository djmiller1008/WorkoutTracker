import * as APIUtil from "../util/user_exercise_api_util";

export const RECEIVE_USER_EXERCISE = "RECEIVE_USER_EXERCISE";
export const RECEIVE_USER_EXERCISES = "RECEIVE_USER_EXERCISES"

export const receiveUserExercises = exercises => ({
    type: RECEIVE_USER_EXERCISES,
    exercises
});

export const receiveUserExercise = exercise => ({
    type: RECEIVE_USER_EXERCISE,
    exercise
});

export const createUserExercise = exercise => dispatch => (
    APIUtil.createUserExercise(exercise)
        .then(exercise => dispatch(receiveUserExercise(exercise)))
);

export const fetchUserExercises = () => dispatch => (
    APIUtil.fetchUserExercises()
        .then(exercises => dispatch(receiveUserExercises(exercises)))
);