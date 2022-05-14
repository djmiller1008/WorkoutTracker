import { connect } from "react-redux";
import { clearExercises, fetchExercises } from "../../actions/exercise_actions";
import { deleteWorkout, fetchWorkout } from "../../actions/workout_actions";
import WorkoutShow from "./workout_show";

const mapStateToProps = (state, ownProps) => {
   
    return (
            {
        exercises: state.entities.exercises,
        workout: state.entities.workouts,
        errors: state.errors.workout
    })};

const mapDispatchToProps = dispatch => ({
    fetchExercises: (workoutId) => dispatch(fetchExercises(workoutId)),
    clearExercises: () => dispatch(clearExercises()),
    fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutShow);
