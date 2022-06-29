import { RECEIVE_ACCOUNT_UPDATE_ERRORS } from "../actions/account_actions";

const accountUpdateErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACCOUNT_UPDATE_ERRORS:
            return action.errors;
        default:
            return state;
    };
};

export default accountUpdateErrorsReducer;


