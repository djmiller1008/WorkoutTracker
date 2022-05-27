@workouts.each do |workout|
    json.set! workout.id do
        json.date workout.date.strftime("%m/%d/%Y")
        json.user_id workout.user_id
        json.id workout.id
        json.created_at workout.created_at
    end
end

