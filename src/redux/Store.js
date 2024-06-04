// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import apiReducer from './ApiReducer';


const store = createStore(apiReducer, applyMiddleware(thunk));

export default store;

