import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);

