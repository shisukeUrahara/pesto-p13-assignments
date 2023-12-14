import React, { useState } from 'react';
import './BookForm.css';

function BookForm({ onAddBook }) {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        year: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddBook(bookData);
        setBookData({ title: '', author: '', year: '' });
    };

    // return (
    //     <div className="book-form-container">
    //         <h3>Add a New Book</h3>
    //         <form onSubmit={handleSubmit} className="book-form">
    //             <input
    //                 type="text"
    //                 name="title"
    //                 value={bookData.title}
    //                 onChange={handleChange}
    //                 placeholder="Title"
    //                 required
    //             />
    //             <input
    //                 type="text"
    //                 name="author"
    //                 value={bookData.author}
    //                 onChange={handleChange}
    //                 placeholder="Author"
    //                 required
    //             />
    //             <input
    //                 type="number"
    //                 name="year"
    //                 value={bookData.year}
    //                 onChange={handleChange}
    //                 placeholder="Publication Year"
    //                 required
    //             />
    //             <button type="submit">Add Book</button>
    //         </form>
    //     </div>
    // );

    return (
        <div className="book-form-wrapper">
            <div className="book-form-container">
                <h3>Add a New Book</h3>
                <form onSubmit={handleSubmit} className="book-form">
                    {/* ... inputs remain unchanged ... */}
                    <input
                        type="text"
                        name="title"
                        value={bookData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        value={bookData.author}
                        onChange={handleChange}
                        placeholder="Author"
                        required
                    />
                    <input
                        type="number"
                        name="year"
                        value={bookData.year}
                        onChange={handleChange}
                        placeholder="Publication Year"
                        required
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default BookForm;
