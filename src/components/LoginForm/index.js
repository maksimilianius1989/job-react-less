

// Core
import React, {useEffect, useState} from 'react';

export const LoginForm = (props) => {

	const [login, setLogin] = useState('');
	const [password, setpassword] = useState('');
	const [complete, setcomplete] = useState(false);
	// console.log('count', count, 'setCount', setCount);

	const {task} = props;

	const handleClick = event => {
		console.log(event);
		setcomplete(true);
		console.log(login, 	password, 	complete);
	};
	useEffect( () => {
		if(complete) {
			fetch('https://google.com.ua')
		}

		},[complete]);
	return (
		<>
			<input type="text" onChange={(event)=>setLogin(event.target.value)} value={login}/>
			<input type="text" onChange={(event)=>setpassword(event.target.value)} value={password}/>
			<button onClick={handleClick}> Send < /button>
		</>
	);
};

