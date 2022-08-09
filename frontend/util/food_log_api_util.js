export const createFoodLog = food_log => (
    $.ajax({
        method: 'POST',
        url: 'api/food_logs',
        data: { food_log }
    })
);

export const fetchFoodLogs = food_diary_id => (
    $.ajax({
        method: 'GET',
        url: 'api/food_logs',
        data: { food_diary_id }
    })
);
