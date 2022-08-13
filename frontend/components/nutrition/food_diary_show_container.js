import { connect } from "react-redux";
import { deleteFoodDiary, fetchFoodDiary } from "../../actions/food_diary_actions";
import { fetchFoodLogs } from "../../actions/food_log_actions";
import FoodDiaryShow from "./food_diary_show";

const mapStateToProps = ({ entities }) => ({
    foodDiary: entities.foodDiaries,
    foodLogs: entities.foodLogs
});

const mapDispatchToProps = dispatch => ({
    fetchFoodDiary: id => dispatch(fetchFoodDiary(id)),
    fetchFoodLogs: foodDiaryId => dispatch(fetchFoodLogs(foodDiaryId)),
    deleteFoodDiary: id => deleteFoodDiary(id)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodDiaryShow); 