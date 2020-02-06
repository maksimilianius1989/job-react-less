import React, {Fragment, useState} from 'react';

export const TaskForm = ({addTask}) => {
	const [message, setMessage] = useState('');

	const clickHandler = event => {
		event.preventDefault();
		addTask(message);

		/**
		 * Чистимо
		 */
		setMessage('');
	};
	return (
		<Fragment>
			<h4>Створити задачу</h4>
			<form action="">
				<input type="text" value={message} onChange={(event)=> setMessage(event.target.value)}/>
				<input type="submit" value={`Додати задачу`} onClick={clickHandler}/>
			</form>
		</Fragment>
	)
};