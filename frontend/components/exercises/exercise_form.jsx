import React from 'react';

class ExerciseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            sets: 0,
            reps: 0,
            weight: 0,
            workout_id: this.props.workoutId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createExercise(this.state)
            .then(() => this.setState({ name: '',
                                        sets: 0,
                                        reps: 0,
                                        weight: 0    }))
    }

    render() {
        return (
            <div className='exercise-form-div'>
                <h2 className='exercise-form-h2'>Add your Exercise</h2>
                <form className='exercise-form'>
                    <label>Exercise:
                    <input type='text'
                            value={this.state.name}
                            onChange={this.update('name')}
                    /></label>

                    <label>Sets:
                    <input type='number'
                            value={this.state.sets}
                            onChange={this.update('sets')}
                    /></label>

                    <label>Reps:
                    <input className='reps-input' type='text'
                            value={this.state.reps}
                            onChange={this.update('reps')}
                    /></label>

                    <label>Weight:
                    <input type='number'
                            value={this.state.weight}
                            onChange={this.update('weight')}
                    /></label>

                    <button onClick={this.handleSubmit}>Add Exercise</button>

                </form>
            </div>
        )
    }
}

export default ExerciseForm;

