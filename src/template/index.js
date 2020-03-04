import React, {Fragment, Children} from 'react';
import {Header} from "../components/header";
import {Col, Container, Row} from "react-bootstrap";

export const Template = (props) => {
	return (
		<Fragment>
			<Header/>
			<Container>
				<Row>
					<Col>{props.children}</Col>
				</Row>
			</Container>
		</Fragment>
	)
}