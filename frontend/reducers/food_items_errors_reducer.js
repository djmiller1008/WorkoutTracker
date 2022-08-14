import {
    RECEIVE_FOOD_ITEM_ERRORS,
    CLEAR_FOOD_ITEM_ERRORS
} from "../actions/food_item_actions";

const foodItemErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOOD_ITEM_ERRORS:
            return action.errors;
        case CLEAR_FOOD_ITEM_ERRORS:
            return [];
        default:
            return state;
    }
};

export default foodItemErrorsReducer;