import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions/index';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const dispatch = useDispatch();
    console.log("**@ post is , ", post)

    return (
        <div className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.content}</p>
            <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
        </div>
    );
};

export default Post;
