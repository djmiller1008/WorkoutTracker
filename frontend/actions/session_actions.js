import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const login = user => dispatch => (
    APIUtil.postSession(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const signup = user => dispatch => (
    APIUtil.postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    APIUtil.deleteSession()
        .then(() => dispatch(logoutUser()))
);

