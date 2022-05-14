import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            user_id: this.props.userId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkout(this.state)
            .then((workout) => {
                this.props.history.push({
                    pathname: `/workouts/${Object.values(workout.workout)[0].id}`,
                    date: this.state.date
                })});
    };        

    render() {

        return (
            <div>
                <form className='workout-form'>
                    <label className="workout-form-label">Workout Date
                    <input type='date'
                            value={this.state.date}
                            onChange={this.update('date')}
                    /></label>
                    <button className="workout-form-button" onClick={this.handleSubmit}>Create Workout</button>
                </form>
            </div>
        )
    };
};

export default WorkoutForm;