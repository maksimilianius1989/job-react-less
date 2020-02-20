import React from 'react';
import {Template} from "../template";
import {Redirect, Route, Switch} from "react-router-dom";
import {book} from "./books";
import {List} from "../components/list";
import {News} from "../components/news";

export const Routes = () => {
	return (
		<>
			<Template>
				<Switch>
					<Route
						exact
						component={List}
						path={book.root.path}
					/>
					<Route
						exact
						component={News}
						path={book.news.path}
					/>

					<Redirect to={`${book.root.path}`}/>
				</Switch>
			</Template>
		</>
	)
};