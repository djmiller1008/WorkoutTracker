import { connect } from "react-redux";
import Profile from "./profile";
import { updateEmail } from "../../actions/account_actions";

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    updateEmail: (data) => dispatch(updateEmail(data))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);