import React from 'react';
import './App.css';

// import Header from './Header';
// import Footer from './Footer';

const App  = () => {

    return (
      <div className="App">
        <header className="header">
        	<img 
        	src="https://www.freepnglogos.com/uploads/google-chrome-logo-png-12.png" 
          alt="logo"
          className="logo"
        	/>
        </header>
        <nav className="nav">
        	<ul>
        		<li><a href="/home">Home</a></li>
        		<li><a href="/about us">About us</a></li>
        		<li><a href="/contacts">Contacts</a></li>
        	</ul>
        </nav>
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
      </div>
    );

}

export default App;
