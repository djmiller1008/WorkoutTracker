
@workout_logs.each do |log|
    json.set! log.id do
        json.id log.id
        json.reps log.reps
        json.weight log.weight
        json.exercise_id log.exercise_id
        json.user_id log.user_id
        json.weight_unit log.weight_unit
        json.rep_unit log.rep_unit
        json.name log.name
    end
end
