import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Dashnav from "./dashnav";

const mapStateToProps = ({ entities, session }) => { 
    return ({
        currentUserEmail: entities.users[session.id].email
    });
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashnav);
