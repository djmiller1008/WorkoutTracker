import { connect } from "react-redux";
import Profile from "./profile";
import { updateWeightUnit } from "../../actions/account_actions";

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
});

const mapDispatchToProps = dispatch => ({
    updateWeightUnit: data => dispatch(updateWeightUnit(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);