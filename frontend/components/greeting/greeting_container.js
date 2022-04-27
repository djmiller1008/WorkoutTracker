import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

