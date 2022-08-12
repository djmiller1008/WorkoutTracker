@food_logs.each do |log|
    json.set! log.id do
        json.id log.id
        json.servings log.servings
        json.food_diary_id log.food_diary_id
        json.user_id log.user_id
        json.name log.name
    end
end

json.nutrient_info @nutrient_info