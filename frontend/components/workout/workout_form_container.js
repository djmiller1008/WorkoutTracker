import { connect } from "react-redux";
import { createWorkout } from "../../actions/workout_actions";

import WorkoutForm from "./workout_form";


const mapStateToProps = (state) => ({
    userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    createWorkout: (workout) => dispatch(createWorkout(workout))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutForm);