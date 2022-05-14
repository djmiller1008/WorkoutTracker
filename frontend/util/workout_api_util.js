export const createWorkout = workout => (
    $.ajax({
        method: 'POST',
        url: 'api/workouts',
        data: { workout }
    })
);

export const fetchWorkouts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/workouts'
    })
);

export const fetchWorkout = id => (
    $.ajax({
        method: 'GET',
        url: `api/workouts/${id}`
    })
);

export const deleteWorkout = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/workouts/${id}`
    })
);




