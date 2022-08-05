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

export const createFoodItem = food_item => (
    $.ajax({
        method: "POST",
        url: "api/food_items",
        data: { food_item }
    })
)