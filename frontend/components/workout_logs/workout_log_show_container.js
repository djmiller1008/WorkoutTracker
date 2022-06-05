
import { connect } from "react-redux";
import { deleteWorkout, fetchWorkout } from "../../actions/workout_actions";
import { fetchWorkoutLogs } from "../../actions/workout_log_actions";
import { getDateFromWorkout, sortWorkoutLogs } from "../../reducers/selectors";
import WorkoutLogShow from "./workout_log_show";



const mapStateToProps = ({ entities }) => ({
    logs: sortWorkoutLogs(entities.workoutLogs),
    date: getDateFromWorkout(entities.workouts) 
 
});


const mapDispatchToProps = dispatch => ({
    fetchWorkoutLogs: (workoutId) => dispatch(fetchWorkoutLogs(workoutId)),
    fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutLogShow);

