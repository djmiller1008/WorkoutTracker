import { connect } from "react-redux";
import { clearWorkouts, fetchWorkouts } from "../../actions/workout_actions";
import WorkoutIndex from "./workout_index";

const mapStateToProps = state => ({
    workouts: state.entities.workouts
});

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    clearWorkouts: () => dispatch(clearWorkouts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutIndex);
