import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Card, Spinner} from "react-bootstrap";
import {PostImage} from "../postImage";
import {PostCategory} from "../categoryList"

export const Post = ()=> {
	const[data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	let { slug } = useParams();

	useEffect( ()=>{
		(async ()=> {
			setLoading(true);
			await fetch('https://twodayweb.ru/wp-json/wp/v2/posts/'+ slug)
				.then(data => data.json())
				.then(data => setData(data))
				.then(()=> setLoading(false))
		})()
	}, []);
	console.log(data);

	if(loading || !data ) {
		return <Spinner animation="border" variant="warning" />
	}

	return (
		<Fragment>
			<Card>
				<Card.Header>{data.title.rendered}</Card.Header>
				<Card.Body>
					<PostImage imageId={data.featured_media}  height='100%' width='100%' alt={data.title.rendered}/>
					<Card.Title>{data.title.rendered}</Card.Title>
					<Card.Text>
						<p dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>

	)
};