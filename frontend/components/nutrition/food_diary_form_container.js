import { connect } from "react-redux";
import FoodDiaryForm from "./food_diary_form";
import { clearFoodDiaryErrors, createFoodDiary } from "../../actions/food_diary_actions";

const mapStateToProps = state => ({
    userId: state.session.id,
    errors: state.errors.foodDiary
});

const mapDispatchToProps = dispatch => ({
    createFoodDiary: diary => dispatch(createFoodDiary(diary)),
    clearErrors: () => dispatch(clearFoodDiaryErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodDiaryForm);
