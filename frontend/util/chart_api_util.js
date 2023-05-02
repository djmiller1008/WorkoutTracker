export const fetchCalorieChartData = (offset = 0) => (
    $.ajax({
        method: 'GET',
        url: `api/food_diaries/calorie_data`,
        data: { offset }
    })
)