import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

export const Post = ()=> {
	const[data, setData] = useState({});
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
	return (
		<Fragment>
		{ loading ? 'Load' :
			<div>
				<h2>{data.title.rendered}</h2>
				<p dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
			</div>
		}
		</Fragment>

	)
};