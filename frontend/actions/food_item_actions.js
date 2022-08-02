import * as APIUtil from "../util/food_item_api_util";

export const RECEIVE_ALL_FOOD_ITEMS = "RECEIVE_ALL_FOOD_ITEMS";

export const receiveAllFoodItems = foodItems => ({
    type: RECEIVE_ALL_FOOD_ITEMS,
    foodItems
});

export const fetchAllFoodItems = () => dispatch => {
    APIUtil.fetchAllFoodItems()
        .then(foodItems => dispatch(receiveAllFoodItems(foodItems)))
};

