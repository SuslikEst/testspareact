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
        	width="100" 
        	height="auto"
        	alt="logo"
        	/>
        </header>
        <nav className="nav">
        	<ul>
        		<li>Home</li>
        		<li>About us</li>
        		<li>Contacts</li>
        	</ul>
        </nav>
        <main role="main" className="content">
        	<p>Content</p>
        </main>
      </div>
    );

}

export default App;
