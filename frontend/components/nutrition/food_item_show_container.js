import { connect } from "react-redux";
import { fetchFoodItem, deleteFoodItem } from "../../actions/food_item_actions";
import FoodItemShow from "./food_item_show";

const mapStateToProps = ({ entities }) => ({
    foodItem: entities.foodItems
});

const mapDispatchToProps = dispatch => ({
    fetchFoodItem: id => dispatch(fetchFoodItem(id)),
    deleteFoodItem: id => dispatch(deleteFoodItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodItemShow);