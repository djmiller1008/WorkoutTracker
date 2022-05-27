import SessionForm from "./session_form";
import { clearSessionErrors, signup } from "../../actions/session_actions";
import { connect } from 'react-redux';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);



