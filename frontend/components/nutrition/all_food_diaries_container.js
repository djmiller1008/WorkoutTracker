import { connect } from "react-redux";
import AllFoodDiaries from "./all_food_diaries";
import { fetchFoodDiaries } from "../../actions/food_diary_actions";
import { sortByDate } from "../../reducers/selectors";

const mapStateToProps = ({ entities }) => ({
    foodDiaries: sortByDate(entities.foodDiaries)
});

const mapDispatchToProps = dispatch => ({
    fetchAllFoodDiaries: () => dispatch(fetchFoodDiaries())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllFoodDiaries);