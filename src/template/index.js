import React, {Fragment, Children} from 'react';
import {Header} from "../components/header";
import {List} from "../components/list";

export const Template = (props) => {
	// console.log(props);
	// console.log(props.children);
	// console.log(Children.toArray(props.children));
	return (
		<Fragment>
			<Header/>
			<div className="container">
				{props.children}
			</div>
		</Fragment>
	)
}