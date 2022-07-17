import { connect } from "react-redux";
import { createUserExercise } from "../../actions/user_exercise_actions";
import { fetchAllCategories } from "../../actions/exercise_category_actions";
import UserExerciseForm from "./user_exercise_form";

const mapStateToProps = ({entities, session}) => ({
    userId: session.id,
    categories: entities.exerciseCategories

})

const mapDispatchToProps = dispatch => ({
    createUserExercise: (data) => dispatch(createUserExercise(data)),
    fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserExerciseForm);