import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateTextFieldVal, subscribe } from './Redux/state';


const rerenderEntireTree = () => {
	ReactDOM.render(<App 
		posts={ state.profile.posts }
		textFieldVal={ state.profile.textFieldVal }
		messages={ state.dialogs.messages }
		dialogs={ state.profile.dialogs }
		addPost={ addPost }
		updateTextFieldVal={ updateTextFieldVal }
		/>, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
serviceWorker.unregister();
