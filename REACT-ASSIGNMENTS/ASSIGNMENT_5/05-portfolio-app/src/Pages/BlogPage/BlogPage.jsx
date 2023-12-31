import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

function BlogPage({ posts }) {
    return (
        <div className="blog">
            <h1>Blogs</h1>
            <div className="blog-posts">
                {posts.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="blog-post-card">
                        <div className="blog-post-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-post-content">
                            <h2>{post.title}</h2>
                            <p>{post.preview}</p>
                            <p className="blog-post-date">{post.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
