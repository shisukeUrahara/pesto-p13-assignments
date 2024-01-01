// PostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/actions/index';
import './PostForm.css';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addPost({ title, content }));

        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <h2>Create New Blog</h2>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;
