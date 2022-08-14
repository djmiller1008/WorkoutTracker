import * as APIUtil from '../util/food_log_api_util';

export const RECEIVE_FOOD_LOGS = "RECEIVE_FOOD_LOGS";
export const RECEIVE_FOOD_LOG = "RECEIVE_FOOD_LOG";
export const RECEIVE_FOOD_LOG_ERRORS = "RECEIVE_FOOD_LOG_ERRORS";
export const CLEAR_FOOD_LOG_ERRORS = "CLEAR_FOOD_LOG_ERRORS";

export const clearFoodLogErrors = () => ({
    type: CLEAR_FOOD_LOG_ERRORS
});

export const receiveFoodLogErrors = errors => ({
    type: RECEIVE_FOOD_LOG_ERRORS,
    errors
});

export const receiveFoodLogs = foodLogs => ({
    type: RECEIVE_FOOD_LOGS,
    foodLogs
});

export const receiveFoodLog = foodLog => ({
    type: RECEIVE_FOOD_LOG,
    foodLog
});

export const createFoodLog = foodLog => dispatch => (
    APIUtil.createFoodLog(foodLog)
        .then(foodLogs => dispatch(receiveFoodLogs(foodLogs)))
        .fail(errors => dispatch(receiveFoodLogErrors(errors.responseJSON)))
);

export const fetchFoodLogs = foodDiaryId => dispatch => (
    APIUtil.fetchFoodLogs(foodDiaryId)
        .then(foodLogs => dispatch(receiveFoodLogs(foodLogs)))
);
