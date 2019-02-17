import React from 'react';
import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
const { posts, addPost } = { ...props };
    return (
      <div>
        <figure className={classes['main-img']}>
          <img src="/images/pliasz.jpg"  className={classes['main-img']} alt="main-img"/>
        </figure>

        <ProfileInfo />

        <MyPosts posts={ posts } addPost={ addPost } />
      </div>
    );

}

export default Profile;
