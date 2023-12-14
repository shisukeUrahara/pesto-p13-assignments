import React from 'react';
import './Book.css';

const Book = ({ details, onDeleteBook, onToggleDetails, showDetails }) => (
    <div className="book-card">
        <h4>{details.title}</h4>
        <p>Author: {details.author}</p>
        <p>Year: {details.year}</p>
        {showDetails && <p>Description: {details.description}</p>}
        <button onClick={onToggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <button onClick={onDeleteBook} className="delete-button">
            Delete
        </button>
    </div>
);

export default Book;
