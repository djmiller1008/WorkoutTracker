import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import { connect } from 'react-redux';
import { clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);

