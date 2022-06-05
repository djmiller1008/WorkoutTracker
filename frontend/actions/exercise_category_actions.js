import * as APIUtil from "../util/exercise_categories_api_util";

export const RECEIVE_EXERCISE_CATEGORIES = "RECEIVE_EXERCISE_CATEGORIES";
export const RECEIVE_EXERCISE_CATEGORY = "RECEIVE_EXERCISE_CATEGORY";

export const receiveExerciseCategory = category => ({
    type: RECEIVE_EXERCISE_CATEGORY,
    category
});

export const receiveExerciseCategories = categories => ({
    type: RECEIVE_EXERCISE_CATEGORIES,
    categories
});

export const fetchExerciseCategory = category => dispatch => (
    APIUtil.fetchCategory(category)
        .then(category => dispatch(receiveExerciseCategory(category)))
);

export const fetchAllCategories = () => dispatch => (
    APIUtil.fetchAllCategories()
        .then(categories => dispatch(receiveExerciseCategories(categories)))
);

