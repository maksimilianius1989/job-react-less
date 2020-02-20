import React, {Fragment, useState} from 'react';

export const TaskForm = ({addTask}) => {
	const [item, setItem] = useState({
												message : '',
												description : '',
												userID : '',
												completed : false
											});
	console.log(item);
	const setMessage = (key, text) => {
		setItem( prev =>  {
			return {
				...prev,
				[key]: text
			}
		});
	};

	const clickHandler = event => {
		event.preventDefault();
		addTask(item)
	};

	return (
		<Fragment>
			<h4>Створити задачу</h4>
			<form action="">
				<input type="text" value={item.message} onChange={(event)=> setMessage('message', event.target.value)} placeholder='Назва'/>
				<input type="number" value={item.id} onChange={(event)=> setMessage('userID', event.target.value)} placeholder='Number'/>
				<input type="text" value={item.description} onChange={(event)=> setMessage('description', event.target.value)} placeholder='Опис'/>

				<label>
					<input type="checkbox" value={`Status`} onChange={
						(event)=> {
							setMessage('completed', event.target.checked)
						}
					}
					/>
					<span>Red</span>
				</label>
				<br/>
				<input type="submit" value={`Додати задачу`} onClick={clickHandler}/>
			</form>
		</Fragment>
	)
};