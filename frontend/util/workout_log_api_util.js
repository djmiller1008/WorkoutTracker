export const fetchWorkoutLogs = (workout_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/workouts/${workout_id}/workout_logs`
    })
);

export const postWorkoutLog = (workout_log) => (
    $.ajax({
        method: 'POST',
        url: `/api/workouts/${workout_log.workout_id}/workout_logs`,
        data: { workout_log }
    })
);
