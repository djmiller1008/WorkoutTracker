import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const WorkoutItem = ({ workout }) => {
    return (
        <Link to={`/workouts/${workout.id}/workout_log`}
                ><p className='workout-date'>{workout.date}</p></Link>
    )
}

export default withRouter(WorkoutItem);
