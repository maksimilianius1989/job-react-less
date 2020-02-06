// Core
import React, {useState} from 'react';

export const Task = (props) => {

	const [count, setCount] = useState(0);
	// console.log('count', count, 'setCount', setCount);

	const {task, delete:deleteTask, setDone} = props;

	const handleClick = event => {
		setDone(task.id);

		console.log(event);
		setCount((prev) => prev + 5);
	};
	const butonStyle = {
		float : 'right'
	};
	const complateStatus = {
		textDecoration : 'line-through'
	};
	return (
		<li className="collection-item" onClick={handleClick} style={task.completed ? complateStatus : {}}>
			Count {count} | {task.title}
			<button style={butonStyle} onClick={(event)=>{deleteTask(task.id)}}>Видалити</button>
		</li>
	);
};



// css

//svg
//
// https://uk.reactjs.org/docs/react-api.html#reactpurecomponent


/**
 export class Task extends React.Component  {

	constructor () {
		super();

		this.state = {
			clickCount : 0,
			done : false
		};
	}
	handleClick =  () => {
		this.props.setDone();
		this.setState(
			{
				...this.state,
				clickCount : ++this.state.clickCount,
				done : !this.state.done
			}
		);
	};
	componentDidMount() {
		console.log('Mount');
			const {task} = this.props;
		this.setState(
			{
				...this.state,
				done : task.completed
			}
		);
	}
	componentDidUpdate (prevProps, prevState, snap) {
		console.log('prevProps', prevProps, 'prevState', prevState, 'snap', snap);
	}
	componentWillUnmount() {
		console.log('Unmount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		if(this.props === nextProps) {
			console.log('shouldComponentUpdate false ');
			return false;
		}
		return true;
	}

	render () {
		const {task} = this.props;
		const {clickCount} = this.state;
		const style = this.state.done ? {textDecoration: 'line-through'} : {};
		return (

			<li className="collection-item" onClick={this.handleClick} style={style}>Click : {clickCount} | {task.title}</li>
		)
	}

};
 */
