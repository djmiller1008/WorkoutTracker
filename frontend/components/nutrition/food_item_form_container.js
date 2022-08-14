import { connect } from "react-redux";
import FoodItemForm from "./food_item_form";
import { clearFoodItemErrors, createFoodItem } from "../../actions/food_item_actions";

const mapStateToProps = ({ session, errors }) => ({
    userId: session.id,
    errors: errors.foodItem
});

const mapDispatchToProps = dispatch => ({
    createFoodItem: (foodItem) => dispatch(createFoodItem(foodItem)),
    clearErrors: () => dispatch(clearFoodItemErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodItemForm);
