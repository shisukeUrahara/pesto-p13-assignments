// Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const posts = useSelector(state => state.posts);
    console.log("**@ posts are , ", posts)

    return (
        <div className="home">
            <PostForm />
            <h2>Blog List</h2>
            {posts.length ? posts.map(post => <Post key={post.id} post={post} />) : <h3>No Blogs found</h3>}
        </div>
    );
};

export default Home;
