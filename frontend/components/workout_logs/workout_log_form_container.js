import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_actions";
import { createWorkoutLog } from "../../actions/workout_log_actions";
import { getExerciseNames } from "../../reducers/selectors";
import WorkoutLogForm from "./workout_log_form";

const mapStateToProps = state => ({
    userId: state.session.id,
    exerciseNames: getExerciseNames(state.entities.exercises),
    workoutId: Object.values(state.entities.workouts)[0].id,
    exercises: state.entities.exercises
});

const mapDispatchToProps = dispatch => ({
    createWorkoutLog: log => dispatch(createWorkoutLog(log)),
    fetchExercises: () => dispatch(fetchExercises())
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(WorkoutLogForm);