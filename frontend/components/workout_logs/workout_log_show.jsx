import React, { useEffect } from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import WorkoutLogItem from './workout_log_item';
import DashnavContainer from '../dashboard/dashnav_container';

const WorkoutLogShow = ({ match, logs, fetchWorkoutLogs, fetchWorkout, date, deleteWorkout, clearLogs }) => {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            fetchWorkoutLogs(match.params.workoutId)
            
        }, 250);
        fetchWorkout(match.params.workoutId);
        return () => {
            clearLogs();
        }
    }, []);

    const handleDelete = e => {
        e.preventDefault();
        deleteWorkout(match.params.workoutId)
            .then(() => history.replace('/dashboard'));
    }
     
    let displayLogs;
 
    if (Object.values(logs).length > 0) {
         displayLogs = Object.values(logs).map((log, i) => {
            if (log.length > 6) {
                let offsetLogs = [];
                const offset = 0;
                const numOfLogs = Math.ceil(log.length / 6);
                for (let j = 0; j < numOfLogs; j++) {
                    offsetLogs.push(<WorkoutLogItem key={i + j} log={log.splice(offset, offset + 6)} />);
                }
                return offsetLogs;
            } else {
                return <WorkoutLogItem key={i} log={log} />
            }
         });
    } else {
        displayLogs = "";
    }

    return (
        <>
            <DashnavContainer />
            <div>
                <div className='workout-log-div'>        
                    <div className='log-title-div'>
                        <h1 className='date-h1'>Workout: {date}</h1>
                        
                        <Link className='dashboard-link' to={`/workouts/${match.params.workoutId}/workout_log/new`} replace >
                            Log An Exercise</Link>
                        
                    </div>
                    <div className='display-all-logs-div'>
                        {displayLogs}
                    </div>
                    
                    <div className='new-exercise-link-div'>
                        <button onClick={handleDelete} className='delete-button'>Delete Workout</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default withRouter(WorkoutLogShow);