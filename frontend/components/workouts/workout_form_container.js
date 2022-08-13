import { connect } from "react-redux";
import { clearWorkoutErrors, createWorkout } from "../../actions/workout_actions";
import WorkoutForm from "./workout_form";


const mapStateToProps = state => ({
    userId: state.session.id,
    errors: state.errors.workout
});

const mapDispatchToProps = dispatch => ({
    createWorkout: (workout) => dispatch(createWorkout(workout)),
    clearErrors: () => dispatch(clearWorkoutErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutForm);