import React, {Fragment, Children} from 'react';
import {Header} from "../header";
import {LoginForm} from "../LoginForm";
import {List} from "../list";

export const Template = (props) => {
	console.log(props);
	console.log(props.children);
	console.log(Children.toArray(props.children));
	return (
		<Fragment>
			<Header/>
			<div className="container">
				{props.children}
				<h2>Test</h2>
				<List/>
			</div>
		</Fragment>
	)
}