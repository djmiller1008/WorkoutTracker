@food_diaries.each do |food_diary|
    json.set! food_diary.id do
        json.date food_diary.date.strftime("%m/%d/%Y")
        json.user_id food_diary.user_id
        json.id food_diary.id
        json.created_at food_diary.created_at
    end
end