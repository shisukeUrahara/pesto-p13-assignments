import React, { Component } from 'react';
import Book from '../Book/Book';
import WithLogging from '../WithLogging/WithLogging'; // Import the HOC
import './BookList.css'

class BookList extends Component {
    render() {
        const books = [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
            { title: 'Book 3', author: 'Author 3', year: 2022 },
        ];

        return (
            <div className="book-list">
                {books.map((book, index) => (
                    <Book key={index} {...book} />
                ))}
            </div>
        );
    }
}

export default WithLogging(BookList); // Wrap BookList with WithLogging HOC
