// store.js
import { createStore } from 'redux';
import toDoListReducer from './reducers/index';

const store = createStore(toDoListReducer);

export default store;
