import React, {Component} from "react";
import {book} from "../../routes/books";
import {Link, NavLink} from "react-router-dom";

export class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<nav  >
				<div className="nav-wrapper">
					<a href="#"  className="brand-logo center">Logo</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><Link  to={book.root.path}>{book.root.title}</Link></li>
						<li><Link  to={book.news.path}>{book.news.title}</Link></li>
						<li><Link  to={book.profile.path}>{book.profile.title}</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}