import React, {Component, Fragment} from "react";
import {book} from "../../routes/books";
import {Link, NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

export class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<Fragment>
				<Navbar bg="primary" variant="dark">
					<Navbar.Brand href="/">React App</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href={book.root.path}>{book.root.title}</Nav.Link>
						<Nav.Link href={book.news.path}>{book.news.title}</Nav.Link>
						<Nav.Link href={book.profile.path}>{book.profile.title}</Nav.Link>
					</Nav>
				</Navbar>
			</Fragment>
		)
	}
}