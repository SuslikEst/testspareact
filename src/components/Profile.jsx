import React from 'react';

const Profile = () => {

    return (
      <main role="main" className="content">
        <figure>
          <img src="/images/pliasz.jpg" className="main-img" alt="main-img"/>
        </figure>
        <img src="/images/avatar.jpg" alt="avatar"/>
        <div>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Placeat adipisci velit suscipit officia earum deserunt ad eligendi, corrupti vel non 
            provident totam rerum maiores natus consequuntur ab molestiae dolores. Alias.
          </p>
        </div>
        <article>
          Post
        </article>
      </main>
    );

}

export default Profile;
