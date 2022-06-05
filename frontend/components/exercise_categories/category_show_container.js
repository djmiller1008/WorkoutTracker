import { connect } from "react-redux";
import { fetchExerciseCategory } from "../../actions/exercise_category_actions";
import CategoryShow from "./category_show";

const mapStateToProps = ({ entities }) => ({
    category: entities.exerciseCategories    
});

const mapDispatchToProps = dispatch => ({
    fetchExerciseCategory: categoryName => dispatch(fetchExerciseCategory(categoryName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryShow);

