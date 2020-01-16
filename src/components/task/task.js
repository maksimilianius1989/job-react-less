// Core
import React, {useState} from 'react';

export const Task = (props) => {

	const [count, setCount] = useState(0);
	// console.log('count', count, 'setCount', setCount);

	const {task} = props;

	const handleClick = event => {
		console.log(event);
		setCount((prev) => prev + 5);
	};
	return (
		<li className="collection-item" onClick={handleClick}>Count {count} | {task.title} 	</li>
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
