import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { likePost, deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    console.log(post);
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <>&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <>&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <>&nbsp;Like</>;
  };

  return (
    <div className="postCard">
      <img className="postImg" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className="p-2">
        <div className="postImgDetail">
          <h6>{post.name}</h6>
          <h2>{moment(post.createdAt).fromNow()}</h2>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className="postImgOverlay">
          <button type="submit" onClick={() => setCurrentId(post._id)}>
            Edit Button
          </button>
        </div>
        )}
        <div className="postDetail">
          <h2>{post.tags.map((tag) => `#${tag} `)}</h2>
        </div>
        <h5 className="postTitle">{post.title}</h5>
        <div>
          <p>{post.message}</p>
        </div>
        <div className="postActions">
          <button type="submit" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
            <Likes />
          </button>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <button type="submit" onClick={() => dispatch(deletePost(post._id))}>
            Delete
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
