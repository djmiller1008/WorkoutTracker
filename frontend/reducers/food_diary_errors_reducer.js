import {
    RECEIVE_FOOD_DIARY_ERRORS,
    CLEAR_FOOD_DIARY_ERRORS
} from "../actions/food_diary_actions";

const foodDiaryErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOOD_DIARY_ERRORS:
            return action.errors;
        case CLEAR_FOOD_DIARY_ERRORS:
            return [];
        default:
            return state;
    }
};

export default foodDiaryErrorsReducer;