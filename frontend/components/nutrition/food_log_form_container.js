import { connect } from "react-redux";
import { createFoodLog } from "../../actions/food_log_actions";
import FoodLogForm from "./food_log_form";

const mapStateToProps = ({ session }) => ({
    userId: session.id
});

const mapDispatchToProps = dispatch => ({
    createFoodLog: foodLog => dispatch(createFoodLog(foodLog))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodLogForm);