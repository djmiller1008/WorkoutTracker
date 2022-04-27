import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";
import { connect } from "react-redux";

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);

