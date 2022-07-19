export const createUserExercise = user_exercise => (
    $.ajax({
        method: 'POST',
        url: '/api/user_exercises',
        data: { user_exercise }
    })
);

export const fetchUserExercises = () => (
    $.ajax({
        method: 'GET',
        url: '/api/user_exercises'
    })
);

export const deleteUserExercise = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/user_exercises/${id}`
    })
);
