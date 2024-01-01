// CartCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../../store/actions/index';
import './CartCard.css';

const CartCard = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(updateQuantity(item.id, item.quantity + 1));
    };

    const handleDecreaseQuantity = () => {
        if (item.quantity === 1) {
            dispatch(removeItem(item.id));
        } else {
            dispatch(updateQuantity(item.id, item.quantity - 1));
        }
    };

    return (
        <div className="cart-card">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
            <p>Total: ${item.price * item.quantity}</p>
        </div>
    );
};

export default CartCard;
