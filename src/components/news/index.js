import React, {Fragment, useEffect, useState} from 'react';
import {book} from "../../routes/books";
import {Link} from "react-router-dom";

// https://twodayweb.ru/wp-json/wp/v2/posts

export const News = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect( ()=>{
		(async ()=> {
			setLoading(true);
			await fetch('https://twodayweb.ru/wp-json/wp/v2/posts')
				.then(data => data.json())
				.then(data => setPosts(data))
				.then(()=> setLoading(false))
		})()

	},[] );

	const renderPosts = ()=> {
		return posts.map( el =>{
				return <p key={el.id}><Link to={ `${book.post.pathurl}${el.id}` }>{el.title.rendered}</Link></p>
		})
	};

	return (
		<Fragment>
			<h1>News</h1>
			{loading ? 'Load' : ''}
			{posts.length > 1 && renderPosts() }
		</Fragment>
	)
};