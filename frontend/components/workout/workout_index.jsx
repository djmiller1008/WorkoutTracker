import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);
    };
    
    componentDidMount() {
        this.props.fetchWorkouts();
    };

    renderWorkouts() {
        return Object.values(this.props.workouts).map((workout, i) => (
            <WorkoutIndexItem key={i} workout={workout}/>
        ))
    };

    render() {
        return (
            <div className='main-content'>
                <Link className='new-workout-link' to='/workouts/new'>Add a New Workout</Link>
                <div className='workout-index-div'>
                    <h2 className='workout-index-title'>Your Workouts</h2>
                    <ul className='workouts-ul'>
                        {this.renderWorkouts()}
                    </ul>
                </div>
            </div>
        )
    };
};

export default WorkoutIndex;