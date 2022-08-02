@food_items.each do |food_item|
    json.set! food_item.id do
        json.name food_item.name
        json.calories food_item.calories
        json.fat food_item.fat
        json.protein food_item.protein
        json.carbohydrates food_item.carbohydrates
    end
end