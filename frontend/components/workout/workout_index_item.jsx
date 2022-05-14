import React from 'react';
import { Link } from 'react-router-dom';


const WorkoutIndexItem = ({ workout }) => {
    return <Link className='workout-index-item' to={ {pathname: `/workouts/${workout.id}`,
                                                        date: workout.date}} >{workout.date}</Link> 
}

export default WorkoutIndexItem;