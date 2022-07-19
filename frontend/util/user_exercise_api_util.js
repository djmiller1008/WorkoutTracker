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
