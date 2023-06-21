import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_actions";
import { createWorkoutLog } from "../../actions/workout_log_actions";
import { getExerciseNames } from "../../reducers/selectors";
import WorkoutLogForm from "./workout_log_form";

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    userId: session.id,
    exerciseNames: getExerciseNames(entities.exercises),
    //workoutId: Object.values(state.entities.workouts)[0].id,
    exercises: entities.exercises 
});

const mapDispatchToProps = dispatch => ({
    createWorkoutLog: log => dispatch(createWorkoutLog(log)),
    fetchExercises: () => dispatch(fetchExercises())
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(WorkoutLogForm);