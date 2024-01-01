// reducers.js
import { ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from '../actions/index';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, { id: Date.now(), ...action.payload }];

        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload);

        case UPDATE_QUANTITY:
            return state.map(item =>
                item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
            );

        default:
            return state;
    }
};

export default cartReducer;
