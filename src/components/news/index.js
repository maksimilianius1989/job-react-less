import React, {Fragment, useEffect, useState} from 'react';
import {book} from "../../routes/books";
import {Link} from "react-router-dom";
import {apiPosts} from "../../api/posts";
import {Card, Media, Spinner} from "react-bootstrap"
import {PostImage} from "../postImage";
import {PostCategory} from "../categoryList"
import {PostPagination} from "../pagination"

// https://twodayweb.ru/wp-json/wp/v2/posts

export const News = () => {
	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		(async () => {
			console.log('--------------->pageNumber', pageNumber)
			setLoading(true);
			const data = await apiPosts.get(pageNumber);
			setPosts(data);
			setLoading(false)
		})()
	},[pageNumber]);

	if (null === posts || loading) {
		return <Spinner animation="grow" variant="danger"/>
	}

	const postList = posts.map( el => {
		// return <p key={el.id}><Link to={`${book.post.pathurl}${el.id}`}>{el.title.rendered}</Link></p>
		return (
			<Media as="li">
				<PostImage imageId={el.featured_media} height='64' width='64' alt={el.title.rendered} circle={true}/>
				<Media.Body>
					<h5><Link to={`${book.post.pathurl}${el.id}`}>{el.title.rendered}</Link></h5>
					<p dangerouslySetInnerHTML={{ __html: el.excerpt.rendered }} />
					<PostCategory postId={el.id} />
				</Media.Body>
			</Media>
		)
	});
	
	return (
		<Fragment>
			<h1>News</h1>
			<ul className="list-unstyled">
				{postList}
			</ul>

			<PostPagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
		</Fragment>
	)
};