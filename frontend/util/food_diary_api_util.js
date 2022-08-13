export const createFoodDiary = food_diary => (
    $.ajax({
        method: "POST",
        url: "/api/food_diaries",
        data: { food_diary }
    })
);

export const fetchFoodDiaries = limit => (
    $.ajax({
        method: "GET",
        url: "/api/food_diaries",
        data: { limit }
    })
);

export const fetchFoodDiary = id => (
    $.ajax({
        method: "GET",
        url: `/api/food_diaries/${id}`
    })
);

export const deleteFoodDiary = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/food_diaries/${id}`
    })
);