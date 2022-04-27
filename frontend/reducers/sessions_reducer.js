import { RECEIVE_CURRENT_USER,
         LOGOUT_USER
} from "../actions/session_actions";    

const sessionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.user);
        case LOGOUT_USER:
            return Object.assign({}, state);
        default: 
            return state;
    };
};

export default sessionsReducer;

