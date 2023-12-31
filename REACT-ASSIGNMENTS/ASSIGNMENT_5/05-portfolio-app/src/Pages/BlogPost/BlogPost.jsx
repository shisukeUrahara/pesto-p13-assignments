import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ posts }) {
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    if (!post) return <div className="blog-post-not-found">Post not found</div>;

    return (
        <div className="blog-post">
            <div className="blog-post-image-container">
                <img src={post.image} alt={post.title} className="blog-post-image" />
            </div>
            <div className="blog-post-content">
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-date">{post.date}</p>
                <div className="blog-post-text">{post.content}</div>
            </div>
        </div>
    );
}

export default BlogPost;
