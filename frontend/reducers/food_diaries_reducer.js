import { 
    RECEIVE_FOOD_DIARIES,
    RECEIVE_FOOD_DIARY
 } from "../actions/food_diary_actions";    

const foodDiariesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOOD_DIARIES:
            return action.diaries;
        case RECEIVE_FOOD_DIARY:
            return action.diary;
        default:
            return state;
    };
};

export default foodDiariesReducer;