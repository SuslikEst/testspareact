import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import { addPost } from './Redux/state';

// addPost('New samurai');

ReactDOM.render(<App 
	posts={ state.profile.posts } 
	messages={ state.dialogs.messages }
	dialogs={ state.profile.dialogs }
	addPost={ addPost }
	/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
