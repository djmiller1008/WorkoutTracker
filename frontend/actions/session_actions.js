import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => (
    APIUtil.postSession(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
    APIUtil.postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
    APIUtil.deleteSession()
        .then(() => dispatch(logoutUser()))
);

