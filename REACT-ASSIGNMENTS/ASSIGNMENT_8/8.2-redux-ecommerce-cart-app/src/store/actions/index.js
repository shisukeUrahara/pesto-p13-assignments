// actions.js
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    payload: itemId
});

export const updateQuantity = (itemId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { itemId, quantity }
});
