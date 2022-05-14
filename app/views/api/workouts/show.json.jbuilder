
json.set! @workout.id do
    json.date @workout.date.strftime("%m/%d/%Y")
    json.user_id @workout.user_id
    json.id @workout.id
end


