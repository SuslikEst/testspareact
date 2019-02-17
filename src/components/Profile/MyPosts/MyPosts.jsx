import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  const { posts, addPost } = { ...props };

  const refTextarea = React.createRef();

  const addPostHandler = () => {
    const text = refTextarea.current.value;
    addPost(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={ refTextarea }></textarea>
        <button onClick={ addPostHandler }>Add post</button>
      </div>
        <div>
          {
            posts.map(post => <Post message={ post.msg } likesCount={ post.likesCount } key={ post.id } />)
          }
        </div>
      </div>
  );

}

export default MyPosts;
