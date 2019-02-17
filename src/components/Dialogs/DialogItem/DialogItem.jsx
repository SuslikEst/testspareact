import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const { active, dialog, message, dialogs, messages } = { ...classes }

const DialogItem = (props) => {
	const { name, id } = { ...props };
	const path =  `/dialogs/${id}`;
	return (
		<div className={ dialog + ' ' + active }>
  			<NavLink to={ path }>{ name }</NavLink>
      	</div>
	);
};


export default DialogItem;
