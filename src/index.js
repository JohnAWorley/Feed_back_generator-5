import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const buttonReducer = (state = { feeling: 0, understanding: 0, supported: 0, comments: ''}, action) => {
   switch (action.type) {
       
       case 'ADD_FEELING': return {...state, feeling: action.payload}
       case 'ADD_UNDERSTANDING': return { ...state, understanding: action.payload}
       case 'ADD_SUPPORTED': return { ...state, supported: action.payload}
       case 'ADD_COMMENTS': return {...state, comments: action.payload}
       case 'CLEAR': return { ...state, feeling: 0, understanding: 0, supported: 0, comments: ''}
       default: return state;
       
   }
   
}

const storeInstance = createStore(
    combineReducers({
        buttonReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
