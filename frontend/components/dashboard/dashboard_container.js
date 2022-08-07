import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchWorkouts } from "../../actions/workout_actions";
import { sortByDate } from "../../reducers/selectors";
import { fetchFoodDiaries } from "../../actions/food_diary_actions";

const mapStateToProps = ({ entities }) => {
    return ({
        workouts: sortByDate(entities.workouts),
        foodDiaries: sortByDate(entities.foodDiaries)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: (data) => dispatch(fetchWorkouts(data)),
    fetchFoodDiaries: limit => dispatch(fetchFoodDiaries(limit))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard); 