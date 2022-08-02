export const fetchAllFoodItems = () => (
    $.ajax({
        method: "GET",
        url: "api/food_items"
    })
);
