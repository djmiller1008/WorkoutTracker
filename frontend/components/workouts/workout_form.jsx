import React from "react";
import { Link } from "react-router-dom";

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userId,
            date: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInput(property) {
        return (e) => this.setState({ [property]: e.target.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkout(this.state)
            .then(workout => this.props.history
                .replace(`/workouts/${Object.values(workout.workout)[0].id}/workout_log`))   
    }; 

    renderErrors() {
        const errors = this.props.errors.map((err => <p>{err}</p>));
        return errors;
    }

    render() {
        return (
            <div>
                <nav className="dashboard-nav-link">
                    <Link to="/dashboard" className='dashboard-link'>My Dashboard</Link>
                </nav>
                <div className="workout-form-errors-div">
                    {this.renderErrors()}
                </div>
                <div className="new-form-div">
                    <h1>Which Day Did You Workout?</h1>
                    <form onSubmit={this.handleSubmit} className='new-content-form'>
                        
                        <input className="date-input" type='date'
                            value={this.state.date}
                            onChange={this.handleInput('date')} />
                        <button className='create-button'>Create Workout</button>
                    </form>
                </div>
            </div>
           
    )}
}

export default WorkoutForm;