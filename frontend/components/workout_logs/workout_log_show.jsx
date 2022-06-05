import React, { useEffect } from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import WorkoutLogItem from './workout_log_item';
import DashNavContainer from '../dashboard/dashnav_container';

const WorkoutLogShow = ({ match, logs, fetchWorkoutLogs, fetchWorkout, date, deleteWorkout }) => {
    let history = useHistory();

    useEffect(() => {
        fetchWorkoutLogs(match.params.workoutId),
        fetchWorkout(match.params.workoutId)
    }, []);

    const handleDelete = e => {
        e.preventDefault();
        deleteWorkout(match.params.workoutId)
            .then(() => history.replace('/dashboard'));
    }
     
   
    
    if (logs !== {}) {
        const displayLogs = Object.values(logs).map((log, i) => (
            <WorkoutLogItem key={i} log={log} />
        ));
        return (
                <div className='workout-log-div'>
                    <nav className='workout-form-nav'>
                        <Link className='dashboard-link' to="/dashboard">My Dashboard</Link>
                    </nav>
                    <div className='log-title-div'>
                        <h1 className='date-h1'>Workout: {date}</h1>
                        
                    </div>
                    <div className='display-all-logs-div'>
                        {displayLogs}
                    </div>
                    
                    <div className='new-exercise-link-div'>
                        <Link to={`/workouts/${match.params.workoutId}/workout_log/new`} replace >
                            Add A New Exercise</Link>
                        <button onClick={handleDelete} className='delete-button'>Delete Workout</button>
                    </div>
                </div>
        )
    } else {
        return <div>No Log To Display</div>;
    }
    
};

export default withRouter(WorkoutLogShow);