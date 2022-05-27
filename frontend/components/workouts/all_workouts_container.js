import { connect } from "react-redux";
import { fetchWorkouts } from "../../actions/workout_actions";
import { sortByDate } from "../../reducers/selectors";
import AllWorkouts from "./all_workouts";

const mapStateToProps = ({ entities }) => {
    return ({
        workouts: sortByDate(entities.workouts)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllWorkouts);