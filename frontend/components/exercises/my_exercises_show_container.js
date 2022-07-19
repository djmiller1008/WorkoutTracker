import { connect } from "react-redux";
import { deleteUserExercise, fetchUserExercises } from "../../actions/user_exercise_actions";
import { sortUserExercises } from "../../reducers/selectors";
import MyExercisesShow from "./my_exercises_show";


const mapStateToProps = ({ entities }) => ({
    exercises: sortUserExercises(entities.userExercises)
});

const mapDispatchToProps = dispatch => ({
    fetchExercises: () => dispatch(fetchUserExercises()),
    deleteExercise: id => dispatch(deleteUserExercise(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyExercisesShow);

