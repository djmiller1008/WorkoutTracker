import { connect } from "react-redux";
import UpdateEmail from "./update_email";
import { clearAccountUpdateErrors, updateEmail } from "../../actions/account_actions";

const mapStateToProps = ({ entities, session, errors }) => ({
    currentUser: entities.users[session.id],
    errors: errors.account
});

const mapDispatchToProps = dispatch => ({
    updateEmail: (data) => dispatch(updateEmail(data)),
    clearErrors: () => dispatch(clearAccountUpdateErrors())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateEmail);