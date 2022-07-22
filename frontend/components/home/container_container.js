import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Content from "./content";

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
});

export default connect(
    null,
    mapDispatchToProps
)(Content)