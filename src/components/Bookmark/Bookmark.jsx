/* eslint-disable */
import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    return (
        <div >
            <h2>Spent time on read: {props.bookmark} mins</h2>
        </div>
    );
};

export default Bookmark;