import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchWorkouts } from "../../actions/workout_actions";
import { sortByDate } from "../../reducers/selectors";

const mapStateToProps = ({ entities }) => {
    return ({
        workouts: sortByDate(entities.workouts)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: (data) => dispatch(fetchWorkouts(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard); 