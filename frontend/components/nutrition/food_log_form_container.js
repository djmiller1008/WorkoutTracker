import { connect } from "react-redux";
import { createFoodLog } from "../../actions/food_log_actions";
import { fetchAllFoodItems } from "../../actions/food_item_actions";
import FoodLogForm from "./food_log_form";

const mapStateToProps = ({ session, entities }) => ({
    userId: session.id,
    foodItems: entities.foodItems
});

const mapDispatchToProps = dispatch => ({
    createFoodLog: foodLog => dispatch(createFoodLog(foodLog)),
    fetchAllFoodItems: () => dispatch(fetchAllFoodItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodLogForm);