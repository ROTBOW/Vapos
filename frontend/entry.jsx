import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    let store = configureStore()

    window.state = store.getState();
    window.store = store
    
    ReactDOM.render(<Root store={store}/>, root)
})