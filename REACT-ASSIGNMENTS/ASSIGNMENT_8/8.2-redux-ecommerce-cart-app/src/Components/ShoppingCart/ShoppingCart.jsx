// ShoppingCart.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../CartCard/CartCard';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state);
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            {cartItems.map(item => <CartCard key={item.id} item={item} />)}

            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
        </div>
    );
};

export default ShoppingCart;

