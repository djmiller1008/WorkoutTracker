import { RECEIVE_CURRENT_USER,
         LOGOUT_USER
} from "../actions/session_actions";    

const defaultState = {
    id: null
};

const sessionsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id}
        case LOGOUT_USER:
            return {id: null};
        default: 
            return state;
    };
};

export default sessionsReducer;

