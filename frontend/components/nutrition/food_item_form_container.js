import { connect } from "react-redux";
import FoodItemForm from "./food_item_form";
import { createFoodItem } from "../../actions/food_item_actions";

const mapStateToProps = ({ session }) => ({
    userId: session.id
});

const mapDispatchToProps = dispatch => ({
    createFoodItem: (foodItem) => dispatch(createFoodItem(foodItem))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodItemForm);
