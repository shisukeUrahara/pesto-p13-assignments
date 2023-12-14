import React, { Component } from 'react';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';
import './BookList.css';

class BookList extends Component {
    state = {
        books: [],
        detailsVisible: {}
    };

    addBook = (newBook) => {
        this.setState((prevState) => ({
            books: [...prevState.books, newBook]
        }));
    };

    deleteBook = (bookToDelete) => {
        this.setState((prevState) => ({
            books: prevState.books.filter((book) => book !== bookToDelete)
        }));
    };

    toggleDetails = (index) => {
        this.setState((prevState) => ({
            detailsVisible: {
                ...prevState.detailsVisible,
                [index]: !prevState.detailsVisible[index]
            }
        }));
    };

    renderBooks = () => {
        const { books, detailsVisible } = this.state;
        return books.map((book, index) => (
            <Book
                key={index}
                details={book}
                onDeleteBook={() => this.deleteBook(book)}
                onToggleDetails={() => this.toggleDetails(index)}
                showDetails={!!detailsVisible[index]}
            />
        ));
    };

    render() {
        return (
            <div>
                <BookForm onAddBook={this.addBook} />
                <div className="book-list-container">
                    {this.state.books.length > 0 ? (
                        <div className="book-grid">
                            {this.renderBooks()}
                        </div>
                    ) : (
                        <div className="empty-message">No books to display. Please add some books.</div>
                    )}
                </div>
            </div>
        );
    }
}

export default BookList;
