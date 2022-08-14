import * as APIUtil from "../util/food_item_api_util";

export const RECEIVE_ALL_FOOD_ITEMS = "RECEIVE_ALL_FOOD_ITEMS";
export const RECEIVE_FOOD_ITEM = "RECEIVE_FOOD_ITEM";
export const CREATE_FOOD_ITEM = "CREATE_FOOD_ITEM";
export const RECEIVE_FOOD_ITEM_ERRORS = "RECEIVE_FOOD_ITEM_ERRORS";
export const CLEAR_FOOD_ITEM_ERRORS = "CLEAR_FOOD_ITEM_ERRORS";

export const receiveFoodItemErrors = errors => ({
    type: RECEIVE_FOOD_ITEM_ERRORS,
    errors
});

export const clearFoodItemErrors = () => ({
    type: CLEAR_FOOD_ITEM_ERRORS
});

export const receiveFoodItem = foodItem => ({
    type: RECEIVE_FOOD_ITEM,
    foodItem
});

export const receiveAllFoodItems = foodItems => ({
    type: RECEIVE_ALL_FOOD_ITEMS,
    foodItems
});

export const fetchFoodItem = id => dispatch => (
    APIUtil.fetchFoodItem(id)
        .then(foodItem => dispatch(receiveFoodItem(foodItem)))
);

export const fetchAllFoodItems = () => dispatch => (
    APIUtil.fetchAllFoodItems()
        .then(foodItems => dispatch(receiveAllFoodItems(foodItems)))
);

export const createFoodItem = foodItem => dispatch => (
    APIUtil.createFoodItem(foodItem)
        .then(foodItems => dispatch(receiveAllFoodItems(foodItems)))
        .fail(errors => dispatch(receiveFoodItemErrors(errors.responseJSON)))
);

export const deleteFoodItem = id => dispatch => (
    APIUtil.deleteFoodItem(id)
        .then(foodItems => dispatch(receiveAllFoodItems(foodItems)))
);