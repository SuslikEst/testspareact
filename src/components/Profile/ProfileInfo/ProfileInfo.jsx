import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	// const { msg } = { ...props };
	return (
		<div>
          <figure>
            <img className={classes.avatar} src="https://wmpics.pics/dl-QIH1.png" alt="avatar"/>
          </figure>
          <div>Title + description</div>
        </div>
	);
};

export default ProfileInfo;