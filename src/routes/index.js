import React from 'react';
import {Template} from "../template";
import {Redirect, Route, Switch} from "react-router-dom";
import {book} from "./books";
import {List} from "../components/list";
import {News} from "../components/news";
import {Profile} from "../components/profile";
import {Post} from "../components/Post";

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
					<Route
						exact
						component={Profile}
						path={book.profile.path}
					/>
					<Route
						exact
						component={Post}
						path={book.post.path}
					/>

					<Redirect to={`${book.root.path}`}/>
				</Switch>
			</Template>
		</>
	)
};