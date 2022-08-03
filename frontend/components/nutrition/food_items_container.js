import { connect } from "react-redux";
import { fetchAllFoodItems } from "../../actions/food_item_actions";
import FoodItems from "./food_items";

const mapStateToProps = ({ entities }) => ({
    foodItems: entities.foodItems
});

const mapDispatchToProps = dispatch => ({
    fetchAllFoodItems: () => dispatch(fetchAllFoodItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodItems);