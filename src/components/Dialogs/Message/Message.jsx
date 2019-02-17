import React from 'react';
import classes from './Message.module.css';
import { NavLink } from 'react-router-dom';

const { active, dialog, message, dialogs, messages } = { ...classes }

const Message = (props) => {
	const { msg } = { ...props };
	return (
      	<div className={ message } >
      		{ msg }
      	</div>
	);
};

export default Message;
