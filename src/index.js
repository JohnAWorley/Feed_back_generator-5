import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const buttonReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_CHECK') {
        console.log('its working');
        console.log('state', state);
        return state + 1;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        buttonReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
