import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const { active, dialog, message, dialogs, messages } = { ...classes };

const Dialogs = (props) => {

	const { dialogs, messages } = { ...props };

    return (
      <div className={ dialogs }>
	      <div className={ classes['dialogs-items'] }>
	      	{
	      		dialogs.map(dialog => <DialogItem name={dialog.name} key={ dialog.id } id={dialog.id}/>)
	      	}
	      </div>
	      <div className={ messages }>
	      	{
	      		messages.map(message => <Message msg={message.msg} key={ message.id } />)
	      	}
	      </div>
      </div>
    );

}

export default Dialogs;
