import * as APIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const CLEAR_WORKOUTS = 'CLEAR_WORKOUTS';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';

export const receiveWorkoutErrors = (errors) => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
});

export const clearWorkouts = () => ({
    type: CLEAR_WORKOUTS
});

export const receiveWorkout = workout => ({
    type: RECEIVE_WORKOUT,
    workout
});

export const receiveWorkouts = (workouts) => ({
    type: RECEIVE_WORKOUTS,
    workouts
});


export const createWorkout = workout => dispatch => (
    APIUtil.createWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)))
        .fail(error => dispatch(receiveWorkoutErrors(error.responseJSON)))
);

export const fetchWorkouts = (data) => dispatch => {
    return (
    APIUtil.fetchWorkouts(data)
        .then(workouts => dispatch(receiveWorkouts(workouts)))
    )
};

export const fetchWorkout = workoutId => dispatch => (
    APIUtil.fetchWorkout(workoutId)
        .then(workout => dispatch(receiveWorkout(workout)))
        .fail(err => dispatch(receiveWorkoutErrors(err.responseJSON)))
);

export const deleteWorkout = workoutId => dispatch => (
    APIUtil.deleteWorkout(workoutId)
        .then(workouts => dispatch(receiveWorkouts(workouts)))
);
