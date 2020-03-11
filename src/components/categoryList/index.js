import React, {Fragment, useEffect, useState} from 'react';
import {postCategory} from "../../api/postCategory";
import {Spinner} from "react-bootstrap";

export const PostCategory = ({postId}) => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await postCategory.get(postId);
            setCategories(data);
        })()

    }, []);
    if(null === categories) {
        return <Spinner animation="light" />
    }

    let categoriesBadge = categories.map(el => {
        return <span className="badge badge-info">{el.name}</span>
    })

    return <Fragment>{categoriesBadge}</Fragment>
}