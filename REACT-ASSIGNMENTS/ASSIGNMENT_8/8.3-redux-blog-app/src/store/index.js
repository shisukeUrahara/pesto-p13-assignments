// store.js
import { createStore } from 'redux';
import blogReducer from './reducers/index';

const store = createStore(blogReducer);

export default store;
