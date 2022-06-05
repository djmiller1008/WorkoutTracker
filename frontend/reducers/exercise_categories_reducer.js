import { 
    RECEIVE_EXERCISE_CATEGORIES,
    RECEIVE_EXERCISE_CATEGORY
} from "../actions/exercise_category_actions";

const exerciseCategoriesReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EXERCISE_CATEGORIES:
            return action.categories;
        case RECEIVE_EXERCISE_CATEGORY:
            return action.category;
        default:
            return state;
    };
};

export default exerciseCategoriesReducer;