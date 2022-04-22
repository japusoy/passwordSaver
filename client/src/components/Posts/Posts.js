import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import './styles.css';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? (<><h2>NOTHIN</h2></>) : (
      <div className="postContainer">
        {posts.map((post) => (
          <Post key={post._id} post={post} setCurrentId={setCurrentId} />
        ))}
      </div>
    )
  );
};
export default Posts;