import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { updateEmail } from './actions/account_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id } 
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

