/* eslint-disable */
import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const { bookmark, markAsRead } = props;
    return (
        <div >
            <h2>Spent time on read: {bookmark} mins</h2>
            <h2>Bookmarked blogs: {markAsRead}</h2>
        </div>
    );
};

export default Bookmark;