import { connect } from 'react-redux';
import AllExercises from './all_exercises';
import { fetchExercises } from '../../actions/exercise_actions';
import { sortExerciseNames } from '../../reducers/selectors';

const mapStateToProps = ({ entities }) => ({
    exercises: sortExerciseNames(entities.exercises)
});

const mapDispatchToProps = dispatch => ({
    fetchExercises: () => dispatch(fetchExercises())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllExercises);

