export const createUserExercise = user_exercise => (
    $.ajax({
        method: 'POST',
        url: '/api/user_exercises',
        data: { user_exercise }
    })
)