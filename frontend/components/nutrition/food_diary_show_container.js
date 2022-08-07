import { connect } from "react-redux";
import { fetchFoodDiary } from "../../actions/food_diary_actions";
import FoodDiaryShow from "./food_diary_show";

const mapStateToProps = state => ({
    foodDiary: state.entities.foodDiaries
});

const mapDispatchToProps = dispatch => ({
    fetchFoodDiary: id => dispatch(fetchFoodDiary(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodDiaryShow);