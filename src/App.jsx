import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App  = (props) => {

    const { dialogs, messages, posts, addPost } = { ...props };

    return (
	  <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <main role="main" className="content">
        	<Route path="/profile" render={ () => <Profile posts={ posts } addPost={ addPost } /> }/>
        	<Route path="/dialogs" render={ () => <Dialogs dialogs={ dialogs } messages={ messages } /> }/>
        	<Route path="/news" render={ () => <News /> }/>
        	<Route path="/music" render={ () => <Music /> }/>
        	<Route path="/settings" render={ () => <Settings /> }/>
        </main>
      </div>
     </BrowserRouter>
    );

}

export default App;
