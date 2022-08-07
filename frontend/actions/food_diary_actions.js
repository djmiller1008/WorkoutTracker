import * as APIUtil from "../util/food_diary_api_util";

export const RECEIVE_FOOD_DIARIES = "RECEIVE_FOOD_DIARIES";
export const RECEIVE_FOOD_DIARY = "RECEIVE_FOOD_DIARY";

export const receiveFoodDiaries = diaries => ({
    type: RECEIVE_FOOD_DIARIES,
    diaries
});

export const receiveFoodDiary = diary => ({
    type: RECEIVE_FOOD_DIARY,
    diary
});

export const createFoodDiary = diary => dispatch => (
    APIUtil.createFoodDiary(diary)
        .then(diary => dispatch(receiveFoodDiary(diary)))
);

export const fetchFoodDiaries = limit => dispatch => (
    APIUtil.fetchFoodDiaries(limit)
        .then(diaries => dispatch(receiveFoodDiaries(diaries)))
);

export const fetchFoodDiary = id => dispatch => (
    APIUtil.fetchFoodDiary(id)
        .then(diary => dispatch(receiveFoodDiary(diary)))
);