import React, { PureComponent } from 'react';
import BookDetail from '../BookDetail/BookDetail';
import './Book.css'

class Book extends PureComponent {
    render() {
        // Destructure the props to pass into BookDetail
        const { title, author, year } = this.props;

        return (
            <div className="book">
                {/* Render BookDetail here and pass the book details as props */}
                <BookDetail title={title} author={author} year={year} />
            </div>
        );
    }
}
export default Book;
