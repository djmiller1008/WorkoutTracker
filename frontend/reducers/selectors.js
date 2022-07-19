export const sortByDate = workouts => {
    return Object.values(workouts).sort(function(a, b) {
        let c = new Date(a.date);
        let d = new Date(b.date);
        return d - c;
    });   
};

export const sortWorkoutLogs = logs => {
    let newLogs = {};
    Object.values(logs).forEach(log => {
        if (newLogs[log.name]) {
            newLogs[log.name].push([log])
        } else {
            newLogs[log.name] = [[log]] 
        }
    });
    return newLogs;
}

export const getDateFromWorkout = workout => {
    if (Object.values(workout).length === 1) {
        return Object.values(workout)[0].date;
    } else {
        return '';
    }
};

export const getExerciseNames = exercises => {
    const nameArray = [];
    Object.values(exercises).map(exercise => nameArray.push(exercise.name))
    return nameArray;
}

export const sortExerciseNames = exercises => {
    const names = Object.values(exercises).map(exercise => exercise.name);
    return names.sort();
}

export const sortUserExercises = exercises => {
    return Object.values(exercises).map(exercise => [exercise.name, exercise.id])
};