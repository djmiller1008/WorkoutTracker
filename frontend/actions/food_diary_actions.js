import * as APIUtil from "../util/food_diary_api_util";

export const RECEIVE_FOOD_DIARIES = "RECEIVE_FOOD_DIARIES";
export const RECEIVE_FOOD_DIARY = "RECEIVE_FOOD_DIARY";
export const RECEIVE_FOOD_DIARY_ERRORS = "RECEIVE_FOOD_DIARY_ERRORS";
export const CLEAR_FOOD_DIARY_ERRORS = "CLEAR_FOOD_DIARY_ERRORS";

export const clearFoodDiaryErrors = () => ({
    type: CLEAR_FOOD_DIARY_ERRORS
})

export const receiveFoodDiaryErrors = errors => ({
    type: RECEIVE_FOOD_DIARY_ERRORS,
    errors
});

export const receiveFoodDiaries = diaries => ({
    type: RECEIVE_FOOD_DIARIES,
    diaries
});

export const receiveFoodDiary = diary => ({
    type: RECEIVE_FOOD_DIARY,
    diary
});

export const deleteFoodDiary = id => (
    APIUtil.deleteFoodDiary(id)    
)

export const createFoodDiary = diary => dispatch => (
    APIUtil.createFoodDiary(diary)
        .then(diary => dispatch(receiveFoodDiary(diary)))
        .fail(error => dispatch(receiveFoodDiaryErrors(error.responseJSON)))
);

export const fetchFoodDiaries = limit => dispatch => (
    APIUtil.fetchFoodDiaries(limit)
        .then(diaries => dispatch(receiveFoodDiaries(diaries)))
);

export const fetchFoodDiary = id => dispatch => (
    APIUtil.fetchFoodDiary(id)
        .then(diary => dispatch(receiveFoodDiary(diary)))
);