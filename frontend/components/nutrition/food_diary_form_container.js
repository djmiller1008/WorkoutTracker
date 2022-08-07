import { connect } from "react-redux";
import FoodDiaryForm from "./food_diary_form";
import { createFoodDiary } from "../../actions/food_diary_actions";

const mapStateToProps = state => ({
    userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    createFoodDiary: diary => dispatch(createFoodDiary(diary))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodDiaryForm);
