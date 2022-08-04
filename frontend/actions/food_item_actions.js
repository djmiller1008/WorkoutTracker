import * as APIUtil from "../util/food_item_api_util";

export const RECEIVE_ALL_FOOD_ITEMS = "RECEIVE_ALL_FOOD_ITEMS";
export const RECEIVE_FOOD_ITEM = "RECEIVE_FOOD_ITEM";

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

