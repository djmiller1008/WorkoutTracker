export const fetchExercises = () => (
    $.ajax({
        method: 'GET',
        url: 'api/exercises'
      
    })
);

export const createExercise = name => (
    $.ajax({
        method: 'POST',
        url: 'api/exercises',
        data: { name }
    })
);

