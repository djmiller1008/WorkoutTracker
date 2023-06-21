import React from "react";
import DashnavContainer from "../dashboard/dashnav_container";
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
           
            const weightUnit = this.state.weightUnit[i] === undefined ? 
                                this.props.currentUser.weight_unit : this.state.weightUnit[i];
            let logObject = {
                reps: this.state.reps[i],
                weight: this.state.weight[i],
                weight_unit: weightUnit,
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
        const defaultUnit = this.props.currentUser.weight_unit;
        
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
                                        defaultValue={defaultUnit}
                                        onChange={this.handleLogInput('weightUnit', i)}>
                                            <option value=''></option>
                                            <option value='lbs'>lbs</option>
                                            <option value='kg'>kg</option>
                                            <option value='bw'>bw</option>
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
                return <span key={i}>{match}</span>
            } else {
            return <li onClick={this.selectExercise} key={i}>{match}</li>
            }
        });
       
        return (
            <>
                <DashnavContainer />
                <div className="workout-log-main-form-div">
                    <h1 className="subpage-h1 log-h1">Log An Exercise</h1>
                    <form className="workout-log-form">
                        <div className="exercise-search">
                            <label>Exercise:</label>
                            <input className="workout-log-form-input" type='text'
                                    value={this.state.exerciseName}
                                    onChange={this.handleExerciseInput}
                                    placeholder="Begin typing to find exercises..."
                            />
                        </div>
                       
                        <ul className="possible-exercises">
                            {possibleExercises}
                        </ul>
                        <section className="sets-section">
                            <label>Sets:</label>
                            <input className="workout-log-form-input" type='number' min='1'
                                    value={this.state.sets}
                                    onChange={this.handleSetsInput('sets')}
                            />
                        </section>
                        
                        {this.renderSetInputs(this.state.sets)}
   
                        <button onClick={this.handleSubmit} className='log-submit'>Log Exercise</button>
                    </form>
                    <div className="custom-info-div">
                        <span>Can't find the exercise you want?</span>
                        <Link className="dashboard-link custom-item-link" to="/exercises/new">Add a New Exercise</Link>
                    </div>
                </div>
            </>
        )
    }
};

export default WorkoutLogForm;