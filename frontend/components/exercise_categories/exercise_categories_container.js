import { connect } from "react-redux";
import ExerciseCategories from "./exercise_categories";
import { fetchAllCategories } from "../../actions/exercise_category_actions";

const mapStateToProps = ({ entities }) => ({
    categories: entities.exerciseCategories
});

const mapDispatchToProps = dispatch => ({
    fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseCategories); 