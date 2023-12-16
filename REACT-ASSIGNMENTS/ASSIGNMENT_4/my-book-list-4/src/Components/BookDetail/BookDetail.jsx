import React, { useState } from 'react';
import './BookDetail.css';

function BookDetail({ title, author, year }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="book-detail">
            <h4>{title}</h4>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide' : 'Show'} Details
            </button>
            {showDetails && <p>More details here...</p>}
        </div>
    );
}

export default BookDetail;
