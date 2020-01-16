import {TaskList} from "../../init/taskList";
import React from "react";
import {Task} from "../task/task";


export const List = () => {

	// const listTask = TaskList.map(function (task, index) {
	// 	return (
	// 		<Fragment key={ task.id }>
	// 			<p>hello</p>
	// 			<Task  task={task} />
	// 		</Fragment>
	// 		)
	// });
	// const listTask = TaskList.map((task, index) => {
	// 	return <Task key={index} task={task}/>
	// });
	const setDone = (id) => {
		TaskList.map((el) => {
			if(el.id === id) {
				el.completed = !el.completed
			}
			return el;
		})
	};
	const listTask = TaskList.map(task => <Task key={task.id} task={task} setDone={setDone}/> );


	return (
		<>
			<h2>My Task List </h2>
			<ul className="collection" >{listTask}</ul>
		</>
	)
};