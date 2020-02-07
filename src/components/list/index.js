import {TaskList} from "../../init/taskList";
import React, {useState} from "react";
import {Task} from "../task/task";
import {TaskForm} from "../formTask";


export const List = () => {
	const [list, setList] = useState(TaskList);
	console.log('list', list);
	const addTask = (task) => {
		setList(
			[
				...list,
				{
					"userId": task.userID,
					"id": Date.now().toString(),
					"title": task.message,
					"completed": task.completed
				}
			]
		)
	};
	const deleteTask = id => {
		console.log('id', id);
		setList( prev => {
			return prev.filter(el => {
				return el.id !== id;
			})
		})
	};
	const complateTask = id => {
		setList( prev => prev.map((el) => {
			if(el.id === id) {
				el.completed = !el.completed
			}
			return el;
		})
		)
	};
	const listTask = list.map(task => <Task key={task.id} task={task} setDone={complateTask} delete={deleteTask}/> );


	return (
		<>
			<TaskForm addTask={addTask}/>
			<h2>Мої задачі :</h2>
			<ul className="collection" >{listTask}</ul>
		</>
	)
};