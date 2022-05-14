import { connect } from 'react-redux';
import ExerciseForm from './exercise_form';
import { createExercise } from '../../actions/exercise_actions';

const mapDispatchToProps = dispatch => ({
    createExercise: (exercise) => dispatch(createExercise(exercise))
});

export default connect(
    null,
    mapDispatchToProps
)(ExerciseForm);
