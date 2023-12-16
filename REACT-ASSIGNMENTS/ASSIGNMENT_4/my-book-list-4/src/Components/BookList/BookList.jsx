import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';
import useBookFilter from '../../hooks/useBookFilter';
import useBookSorter from '../../hooks/useBookSorter';
import './BookList.css';

const BookList = ({ theme }) => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('title');

    const filteredBooks = useBookFilter(books, searchTerm);
    const sortedBooks = useBookSorter(filteredBooks, sortKey);

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const deleteBook = (bookToDelete) => {
        setBooks(books.filter((book) => book !== bookToDelete));
    };

    useEffect(() => {
        const initialBooks = [
            { title: 'Initial Book 1', author: 'Author 1', year: 2021 },
            // ... you can add more initial books here
        ];
        setBooks(initialBooks);
    }, []);

    return (

        <div >
            <BookForm onAddBook={addBook} theme={theme} />
            <div className={`book-list-container ${theme}`}>
                <div className="filters-container">
                    <input
                        type="text"
                        placeholder="Search books..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={sortKey}
                        onChange={(e) => setSortKey(e.target.value)}
                    >
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="year">Year</option>
                    </select>
                </div>

                <div className="book-grid">
                    {sortedBooks.length > 0 ? (
                        sortedBooks.map((book, index) => (
                            <Book
                                key={index}
                                details={book}
                                onDeleteBook={() => deleteBook(book)}
                                theme={theme}
                            />
                        ))
                    ) : (
                        <div className="empty-message">No books to display. Please add some books.</div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default BookList;
