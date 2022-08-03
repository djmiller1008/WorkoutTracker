export const fetchAllFoodItems = () => (
    $.ajax({
        method: "GET",
        url: "api/food_items"
    })
);

export const fetchFoodItem = id => (
    $.ajax({
        method: "GET",
        url: `api/food_items/${id}`,
        data: { id }
    })
);