import React from "react";
import { Link } from "react-router-dom";

class WorkoutLogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exerciseName: '',
            sets: '', 
            reps: {},
            weight: {},
            weightUnit: {},
        }

        this.handleExerciseInput = this.handleExerciseInput.bind(this);
        this.selectExercise = this.selectExercise.bind(this);
        this.handleSetsInput = this.handleSetsInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogInput = this.handleLogInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const logs = this.state.sets;
        if (this.state.exerciseName === "") {
            return alert("You must pick a valid exercise");
        } else if (logs <= 0) {
            return alert("You must pick a valid number of sets");
        }
        

        for (let i = 0; i < logs; i++) {
            let logObject = {
                reps: this.state.reps[i],
                weight: this.state.weight[i],
                weight_unit: this.state.weightUnit[i],
                name: this.state.exerciseName,
                user_id: this.props.userId,
                workout_id: this.props.match.url.split("/")[2]
            }
            this.props.createWorkoutLog(logObject);
        }

        this.props.history.replace(`/workouts/${this.props.match.url.split("/")[2]}/workout_log`);
    };

    setExerciseId() {
        const selectedName = this.state.exerciseName;
        Object.values(this.props.exercises).forEach(exercise => {
            if (exercise.name === selectedName ) {
                this.setState({ exerciseId: exercise.id })
            }
        });
    }

    componentDidMount() {
        this.props.fetchExercises();
    };

    handleExerciseInput(e) {
        this.setState({ exerciseName: e.currentTarget.value });
    };

    selectExercise(e) {
        this.setState({ exerciseName: e.currentTarget.innerText });
    };

    handleSetsInput(property) {
        return e => this.setState({ [property]: e.target.value });
    };

    handleLogInput(property, i) {
        return e => this.setState({ [property]: Object.assign({}, this.state[[property]], { [i]: e.target.value }) })
    }

    renderSetInputs(n) {
        let setInputs = []
        for (let i = 0; i < n; i++) {
            const input = <section className="log-info-section" key={i}>
                                <label>Reps: </label>
                                <input type='number'
                                    
                                    onChange={this.handleLogInput('reps', i)}
                                />
                                <label>Weight: </label>
                                <input type='number'
                                        
                                        onChange={this.handleLogInput('weight', i)}
                                />
                                <label>Weight Unit: </label>
                                <select 
                                        onChange={this.handleLogInput('weightUnit', i)}>
                                            <option value=''></option>
                                            <option value='lbs'>lbs</option>
                                            <option value='kg'>kg</option>
                                            <option value='body-weight'>bw</option>
                                </select>   
                          </section>
            setInputs.push(input);
        }
        return setInputs;
    }

    matches() {
        let matches = [];
        let found = false;
        if (this.state.exerciseName.length === 0) {
            return matches;
        } 

        this.props.exerciseNames.forEach(exercise => {
            let partialName = exercise.slice(0, this.state.exerciseName.length);
            if (this.state.exerciseName === exercise) {
                found = true;
                return [];
            } else if (partialName.toLowerCase() === this.state.exerciseName.toLowerCase()) {
                matches.push(exercise);
            }
        })
        if (matches.length === 0 && found === false) {
            matches.push('No Exercises Found');
            return matches;
        } 
        
        return matches;
    }

    
    render() {
        const possibleExercises = this.matches().map((match, i) => {
            if (match === 'No Exercises Found') {
                return <span>{match}</span>
            } else {
            return <li onClick={this.selectExercise} key={i}>{match}</li>
            }
        });
       
        return (
            <div>
                <nav className="dashboard-nav-link">
                    <Link className="dashboard-link" to='/dashboard'>My Dashboard</Link>
                </nav>
                <div className="workout-log-main-form-div">
                    <form className="workout-log-form">
                        <div className="exercise-search">
                            <label>Exercise:</label>
                            <input type='text'
                                    value={this.state.exerciseName}
                                    onChange={this.handleExerciseInput}
                            />
                        </div>
                       
                        <ul className="possible-exercises">
                            {possibleExercises}
                        </ul>
                        <section className="sets-section">
                            <label>Sets:</label>
                            <input type='number' min='1'
                                    value={this.state.sets}
                                    onChange={this.handleSetsInput('sets')}
                            />
                        </section>
                        
                        {this.renderSetInputs(this.state.sets)}
   
                        <button onClick={this.handleSubmit} className='log-submit'>Log Exercise</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default WorkoutLogForm;