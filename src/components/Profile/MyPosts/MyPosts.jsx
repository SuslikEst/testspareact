import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  const { posts, addPost, textFieldVal, updateTextFieldVal } = { ...props };

  const refTextarea = React.createRef();

  const addPostHandler = () => {
    addPost();
  };

  const changePostHandler = () => {
    const text = refTextarea.current.value;
    updateTextFieldVal(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea onChange={ changePostHandler } ref={ refTextarea } value={ textFieldVal } />
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
