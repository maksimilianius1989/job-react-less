import React, {Fragment, useEffect, useState} from 'react';
import {book} from "../../routes/books";

// https://twodayweb.ru/wp-json/wp/v2/posts

export const News = () => {
	const [posts, setPosts] = useState([]);
	useEffect(()=>{
		(async ()=> {
			await fetch('https://twodayweb.ru/wp-json/wp/v2/posts')
				.then(data => data.json())
				.then(data => setPosts(data))
		})()
	},[]);
	const renderPosts = ()=> {
		return posts.map( el =>{
			return <p><a href={ `${book.post.pathurl}/${el.id}` }>{el.title.rendered}</a></p>
		})
	};

	return (
		<Fragment>
			<h1>News</h1>
			{posts.length > 1 && renderPosts() }
		</Fragment>
	)
};