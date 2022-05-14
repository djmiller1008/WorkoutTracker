@exercises.each do |exercise|
    json.set! exercise.id do
        json.weight exercise.weight
        json.name exercise.name
        json.sets exercise.sets
        json.reps exercise.reps
    end
end
