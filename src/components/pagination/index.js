import React, {useState} from 'react';
import Pagination from 'react-bootstrap/Pagination'

export const PostPagination = ({pageNumber, setPageNumber}) => {
    let first = 1
    let prev = pageNumber > 1 ? pageNumber - 1 : 1
    let next = pageNumber + 1

    const paginationBasic = (
        <div>
            <Pagination>
                <Pagination.First onClick={(e) => setPageNumber(first)}/>
                <Pagination.Prev  onClick={(e) => setPageNumber(prev)}/>
                <Pagination.Item >{pageNumber}</Pagination.Item>
                <Pagination.Next  onClick={(e) => setPageNumber(next)}/>
            </Pagination>
        </div>
    );

    return paginationBasic;
}
