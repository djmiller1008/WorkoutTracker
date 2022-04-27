import { RECEIVE_CURRENT_USER,
         LOGOUT_USER
} from "../actions/session_actions";    

const defaultState = {
    current_user_id: null
};

const sessionsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {current_user_id: action.user.id}
        case LOGOUT_USER:
            return {current_user_id: null};
        default: 
            return state;
    };
};

export default sessionsReducer;

