import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);



