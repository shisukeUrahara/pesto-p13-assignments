import React from 'react';
import './Book.css';

const Book = ({ details, onDeleteBook, onToggleDetails, showDetails, theme }) => (
    <div className={`book-card ${theme}`}>
        <h4>{details.title}</h4>
        <p>Author: {details.author}</p>
        <p>Year: {details.year}</p>
        {showDetails && <p>Description: {details.description}</p>}
        <button onClick={onToggleDetails} className="detail-button">
            {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <button onClick={onDeleteBook} className="delete-button">
            Delete
        </button>
    </div>
);

export default Book;
