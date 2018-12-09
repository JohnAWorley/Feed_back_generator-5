import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const selectPizzaReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA': return action.payload;
        default: return state
    }
}

const storeInstance = createStore(
    combineReducers({
        selectPizzaReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
