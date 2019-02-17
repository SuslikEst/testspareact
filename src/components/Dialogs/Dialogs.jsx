import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const { active, dialog, message, dialogs, messages } = { ...classes };

const Dialogs = () => {

	const dialogsData = [
		{
			id: 1,
			name: "Сергей",
		},
		{
			id: 2,
			name: "Иван",
		},
		{
			id: 3,
			name: "Виктор",
		},
		{
			id: 4,
			name: "Люда",
		},
		{
			id: 5,
			name: "Djohn",
		}
	];
	const messagesData = [
		{
			id: 1,
			msg: "Привет!",
		},
		{
			id: 2,
			msg: "Ваня!",
		},
		{
			id: 3,
			msg: "Как дела?",
		},
		{
			id: 4,
			msg: "Всем хай!",
		},
		{
			id: 5,
			msg: "Hi!",
		}
	];
    return (
      <div className={ dialogs }>
	      <div className={ classes['dialogs-items'] }>
	      	{
	      		dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
	      	}
	      </div>
	      <div className={ messages }>
	      	{
	      		messagesData.map(message => <Message msg={message.msg} />)
	      	}
	      </div>
      </div>
    );

}

export default Dialogs;
