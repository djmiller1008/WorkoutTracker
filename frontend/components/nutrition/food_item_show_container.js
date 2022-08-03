import { connect } from "react-redux";
import { fetchFoodItem } from "../../actions/food_item_actions";
import FoodItemShow from "./food_item_show";

const mapStateToProps = ({ entities }) => ({
    foodItem: entities.foodItems

});

const mapDispatchToProps = dispatch => ({
    fetchFoodItem: id => dispatch(fetchFoodItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodItemShow);