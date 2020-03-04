import React, {useEffect, useState} from 'react';
import {postImage} from "../../api/postImage";
import {Spinner, Image} from "react-bootstrap";

export const PostImage = ({imageId, width, height, alt, circle}) => {
	const [urlImage, setUrlImage] = useState(null);

	useEffect(() => {
		(async () => {
			const data = await postImage.get(imageId);
			setUrlImage(data.guid.rendered);
		})()

	}, []);
	if(null === urlImage) {
		return <Spinner animation="border" variant="warning" />
	}

	return (
		<Image
			roundedCircle={circle}
			width={width}
			height={height}
			className="mr-3"
			src={urlImage}
			alt={alt}
		/>
	)
}