
json.set! @exercise.id do
    json.name @exercise.name
    json.sets @exercise.sets
    json.reps @exercise.reps
    json.weight @exercise.weight
    json.workout_id @exercise.workout_id
end
