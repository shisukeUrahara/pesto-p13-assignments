import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    const post = useSelector((state) => {
        console.log("**@ all posts are , ", state);
        return state.posts.find((p) => p.id == id)
    });

    return post ? (
        <div className="post-details">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    ) : (
        <div>Post not found</div>
    );
};

export default PostDetails;
