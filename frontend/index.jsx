import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


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
    const root = document.getElementById('root');
    ReactDOM.render(<h1>React is working</h1>, root);
});

