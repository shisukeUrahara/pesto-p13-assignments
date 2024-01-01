// reducers.js
import { ADD_POST, DELETE_POST } from '../actions/index';

const initialState = {
    posts: []
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, { id: Date.now(), ...action.payload }] };

        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };

        default:
            return state;
    }
};

export default blogReducer;
