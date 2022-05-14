import React from 'react';
import ExerciseFormContainer from '../exercises/exercise_form_container';


class WorkoutShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseForm: false,
            exercisesLoaded: false,
            exerciseFormButton: 'Add an Exercise'
        };
        this.toggleExerciseForm = this.toggleExerciseForm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
    };

    componentDidMount() {
        const workoutId = this.props.match.params.workoutId;
        this.props.fetchExercises(workoutId);
        this.props.fetchWorkout(workoutId)
            .then(() => this.setState({ exercisesLoaded: true }))
    };

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteWorkout(this.props.match.params.workoutId)
            .then(this.props.history.push('/workouts'))
    };

    renderExercises() {
        if (Object.keys(this.props.exercises).length > 0) {  
            return Object.values(this.props.exercises).map((exercise, i) => (
                <div key={i} className='exercise-show-div'>
                    <ul className='exercise-show-ul'>
                        <li>Exercise: {exercise.name}</li>
                        <li>Weight: {exercise.weight ? exercise.weight : ''}</li>
                        <li>Sets: {exercise.sets ? exercise.sets : ''}</li>
                        <li>Reps: {exercise.reps ? exercise.reps : ''}</li>
                    </ul>
                </div>
            ));
            } else {
            return <div className='no-exercises-div'>No Exercises Yet</div>
        }
    };

    toggleExerciseForm(e) {
        e.preventDefault();
        if (this.state.exerciseForm) {
            this.setState({ exerciseForm: false,
                            exerciseFormButton: 'Add an Exercise' });
        } else {
            this.setState({ exerciseForm: true,
                            exerciseFormButton: 'Hide New Exercise Form' });
        }    
    }


 
    render() {
        if (this.props.errors.length > 0) {
            return (
                <div>{this.props.errors}</div>
            )
        }
        const form = this.state.exerciseForm ? <ExerciseFormContainer workoutId={this.props.match.params.workoutId} /> : '';
        if (this.state.exercisesLoaded) {
            return(
                <div className='workout-show'>
                    <div className='workout-index-div'>
                        <h2 className='workout-index-title'>Your {Object.values(this.props.workout)[0].date} Workout </h2>
                        <div className='exercise-form-buttons'>
                            <button onClick={this.toggleExerciseForm}>{this.state.exerciseFormButton}</button>
                            <button onClick={this.handleDelete}>Delete Workout</button>
                            
                        </div>
                        <div className='exercises-show-div'>
                            {this.renderExercises()}
                        </div>
                       {form}
                    </div>
                    
                   
                </div>
            );
        } else {
            return(
                <div>Exercises Loading...</div>
            );
        }
    };
}
 
export default WorkoutShow;
