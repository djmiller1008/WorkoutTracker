
import { connect } from "react-redux";
import { deleteWorkout, fetchWorkout } from "../../actions/workout_actions";
import { fetchWorkoutLogs } from "../../actions/workout_log_actions";
import { getDateFromWorkout, sortWorkoutLogs } from "../../reducers/selectors";
import { clearWorkoutLogs } from "../../actions/workout_log_actions";
import WorkoutLogShow from "./workout_log_show";



const mapStateToProps = ({ entities }) => ({
    logs: sortWorkoutLogs(entities.workoutLogs), 
    date: getDateFromWorkout(entities.workouts),
     
 
});


const mapDispatchToProps = dispatch => ({
    clearLogs: () => dispatch(clearWorkoutLogs()),
    fetchWorkoutLogs: (workoutId) => dispatch(fetchWorkoutLogs(workoutId)),
    fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutLogShow);

