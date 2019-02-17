import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
      <div>
        <img className={classes.avatar} src="https://html5css.ru/bootstrap/img_avatar2.png" alt="avatar"/>
        {props.message}
      </div>
    );

}

export default Post;
