import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateTextFieldVal } from './Redux/state';


export const rerenderEntireTree = (state) => {
	ReactDOM.render(<App 
		posts={ state.profile.posts }
		textFieldVal={ state.profile.textFieldVal }
		messages={ state.dialogs.messages }
		dialogs={ state.profile.dialogs }
		addPost={ addPost }
		updateTextFieldVal={ updateTextFieldVal }
		/>, document.getElementById('root'));
};