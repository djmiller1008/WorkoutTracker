export const createUserExercise = data => (
    $.ajax({
        method: 'POST',
        url: '/api/user_exercises',
        data: { data }
    })
)