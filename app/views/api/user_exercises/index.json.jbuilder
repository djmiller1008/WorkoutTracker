@user_exercises.each do |exercise|
    json.set! exercise.id do
        json.name exercise.name
        json.id exercise.id
    end
end