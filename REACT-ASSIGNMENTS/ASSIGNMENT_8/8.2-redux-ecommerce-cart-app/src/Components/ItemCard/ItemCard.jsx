// ItemCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateQuantity } from '../../store/actions/index';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state);
    const cartItem = cartItems.find(cartItem => cartItem.name === item.name);

    const handleAddToCart = () => {
        if (cartItem) {
            dispatch(updateQuantity(cartItem.id, cartItem.quantity + 1));
        } else {
            dispatch(addItem({ ...item, quantity: 1 }));
        }
    };

    const handleRemoveFromCart = () => {
        dispatch(updateQuantity(cartItem.id, cartItem.quantity - 1));
    };

    return (
        <div className="item-card">
            <h2>{item.name}</h2>
            <p>${item.price}</p>

            {cartItem && cartItem.quantity > 0 ? (
                <div>
                    <button onClick={handleRemoveFromCart}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={handleAddToCart}>+</button>
                </div>
            ) : (
                <button onClick={handleAddToCart}>Add to Cart</button>
            )}
        </div>
    );
};

export default ItemCard;
