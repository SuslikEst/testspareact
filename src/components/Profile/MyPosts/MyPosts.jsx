import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';

const MyPosts = () => {

  const postsData = [
    {
      id: 1,
      msg: "Пост 1",
      likesCount: 1,
    },
    {
      id: 2,
      msg: "Пост 2",
      likesCount: 10,
    },
    {
      id: 3,
      msg: "Пост 3",
      likesCount: 2,
    },
    {
      id: 4,
      msg: "Пост 4",
      likesCount: 3,
    }
  ];

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
        <div>
          {
            postsData.map(post => <Post message={ post.msg } likesCount={ post.likesCount } />)
          }
        </div>
      </div>
  );

}

export default MyPosts;
