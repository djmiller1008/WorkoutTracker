import { connect } from "react-redux";
import { clearFoodLogErrors, createFoodLog } from "../../actions/food_log_actions";
import { fetchAllFoodItems } from "../../actions/food_item_actions";
import FoodLogForm from "./food_log_form";

const mapStateToProps = ({ session, entities, errors }) => ({
    userId: session.id,
    foodItems: entities.foodItems,
    errors: errors.foodLog
});

const mapDispatchToProps = dispatch => ({
    createFoodLog: foodLog => dispatch(createFoodLog(foodLog)),
    fetchAllFoodItems: () => dispatch(fetchAllFoodItems()),
    clearErrors: () => dispatch(clearFoodLogErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodLogForm);