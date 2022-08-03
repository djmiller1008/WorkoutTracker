import { 
    RECEIVE_ALL_FOOD_ITEMS,
    RECEIVE_FOOD_ITEM
} from "../actions/food_item_actions";

const foodItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOOD_ITEMS:
            return action.foodItems;
        case RECEIVE_FOOD_ITEM:
            return action.foodItem;
        default:
            return state;
    }
};

export default foodItemsReducer;