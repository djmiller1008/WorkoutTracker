import * as APIUtil from '../util/exercise_api_util';

export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES';
export const RECEIVE_EXERCISE = 'RECEIVE_EXERCISE';
export const CLEAR_EXERCISES = 'CLEAR_EXERCISES';

export const receiveExercise = exercise => ({
    type: RECEIVE_EXERCISE,
    exercise
});

export const clearExercises = () => ({
    type: CLEAR_EXERCISES
});

export const receiveExercises = exercises => ({
    type: RECEIVE_EXERCISES,
    exercises
});

export const fetchExercises = () => dispatch => (
    APIUtil.fetchExercises()
        .then(exercises => dispatch(receiveExercises(exercises)))
); 

export const createExercise = exercise => dispatch => (
    APIUtil.createExercise(exercise)
        .then(exercise => dispatch(receiveExercise(exercise)))
);

