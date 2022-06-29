import * as APIUtil from "../util/account_api_util";
import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_ACCOUNT_UPDATE_ERRORS = 'RECEIVE_ACCOUNT_UPDATE_ERRORS';

export const receiveAccountUpdateErrors = (errors) => ({
    type: RECEIVE_ACCOUNT_UPDATE_ERRORS,
    errors
});


export const updateEmail = data => dispatch => {
    return (
        APIUtil.updateData(data)
            .then(user => dispatch(receiveCurrentUser(user)))
            .fail(err => dispatch(receiveAccountUpdateErrors(err.responseJSON)))
    )
};
