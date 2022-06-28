import React, { useEffect } from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import WorkoutLogItem from './workout_log_item';
import DashNavContainer from '../dashboard/dashnav_container';

const WorkoutLogShow = ({ match, logs, fetchWorkoutLogs, fetchWorkout, date, deleteWorkout, clearLogs }) => {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            fetchWorkoutLogs(match.params.workoutId)
            
        }, 250);
        fetchWorkout(match.params.workoutId);
    }, []);

    const handleDelete = e => {
        e.preventDefault();
        deleteWorkout(match.params.workoutId)
            .then(() => history.replace('/dashboard'));
    }

    const handleClear = () => {
        console.log('hi');
        return clearLogs();
    }
     
   
    
    let displayLogs;

    if (JSON.stringify(logs) !== '{}') {
         displayLogs = Object.values(logs).map((log, i) => (
            <WorkoutLogItem key={i} log={log} />
        ));
    } else {
        displayLogs = "";
    }
    
    return (
            <div className='workout-log-div'>
                <nav className='dashboard-nav-link'>
                    <Link onClick={handleClear} className='dashboard-link' to="/dashboard">My Dashboard</Link>
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
    
    
};

export default withRouter(WorkoutLogShow);