import React from 'react';
import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    return (
      <div>
        <figure className={classes['main-img']}>
          <img src="/images/pliasz.jpg"  className={classes['main-img']} alt="main-img"/>
        </figure>

        <ProfileInfo />

        <MyPosts />
      </div>
    );

}

export default Profile;
