import * as APIUtil from '../util/food_log_api_util';

export const RECEIVE_FOOD_LOGS = "RECEIVE_FOOD_LOGS";
export const RECEIVE_FOOD_LOG = "RECEIVE_FOOD_LOG";

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
);