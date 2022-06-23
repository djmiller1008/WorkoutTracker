import * as APIUtil from '../util/workout_log_api_util';

export const RECEIVE_WORKOUT_LOGS = 'RECEIVE_WORKOUT_LOGS';
export const RECEIVE_WORKOUT_LOG = 'RECEIVE_WORKOUT_LOG';
export const RECEIVE_WORKOUT_LOG_ERRORS = 'RECEIVE_WORKOUT_LOG_ERRORS';
export const CLEAR_WORKOUT_LOGS = 'CLEAR_WORKOUT_LOGS';

export const clearWorkoutLogs = () => ({
    type: CLEAR_WORKOUT_LOGS
});

export const receiveWorkoutLogErrors = errors => ({
    type: RECEIVE_WORKOUT_LOG_ERRORS,
    errors
});

export const receiveWorkoutLog = log => ({
    type: RECEIVE_WORKOUT_LOG,
    log
});

export const receiveWorkoutLogs = logs => ({
    type: RECEIVE_WORKOUT_LOGS,
    logs
});

export const fetchWorkoutLogs = workoutId => dispatch => (
    APIUtil.fetchWorkoutLogs(workoutId)
        .then((logs) => dispatch(receiveWorkoutLogs(logs)))
);

export const createWorkoutLog = log => dispatch => (
    APIUtil.postWorkoutLog(log)
        .then((log) => dispatch(receiveWorkoutLog(log)))
        
);


