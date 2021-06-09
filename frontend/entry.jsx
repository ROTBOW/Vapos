import React from 'react';
import ReactDOM from 'react-dom';
import { fetchRelations } from './actions/users_games_actions';
import Root from './components/root';


import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
        sessionUser: window.currentUser
        };
    }
    let store = configureStore(preloadedState)

    window.store = store
    window.fetchRelations = fetchRelations
    
    ReactDOM.render(<Root store={store}/>, root)
})