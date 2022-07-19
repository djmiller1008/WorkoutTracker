import { connect } from "react-redux";
import { fetchUserExercises } from "../../actions/user_exercise_actions";
import { sortExerciseNames } from "../../reducers/selectors";
import MyExercisesShow from "./my_exercises_show";


const mapStateToProps = ({ entities }) => ({
    exercises: sortExerciseNames(entities.userExercises)
});

const mapDispatchToProps = dispatch => ({
    fetchExercises: () => dispatch(fetchUserExercises())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyExercisesShow);

