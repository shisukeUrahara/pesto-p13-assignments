// Home.js
import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Home.css';

// Dummy data for the items being sold
const items = [
    { name: 'Item 1', price: 19.99 },
    { name: 'Item 2', price: 29.99 },
    { name: 'Item 3', price: 39.99 },
];

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Target</h1>
            {items.map(item => <ItemCard key={item.name} item={item} />)}
        </div>
    );
};

export default Home;
