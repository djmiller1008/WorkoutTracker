import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
});

export default connect(
    mapStateToProps,
    null
)(Profile);