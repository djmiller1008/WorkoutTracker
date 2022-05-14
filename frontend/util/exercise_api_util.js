export const fetchExercises = (workout_id) => (
    $.ajax({
        method: 'GET',
        url: 'api/exercises',
        data: { workout_id }
    })
);

export const createExercise = exercise => (
    $.ajax({
        method: 'POST',
        url: 'api/exercises',
        data: { exercise }
    })
);

