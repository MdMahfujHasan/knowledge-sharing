/* eslint-disable */
import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const { bookmark, markAsRead, title } = props;
    return (
        <div>
            <h2 className='read-time'>Spent time on read: {bookmark} mins</h2>
            <div className='blogs'>
                <h2 className='bookmark'>Bookmarked blogs: {markAsRead}</h2>
                <br />
                <h2 className='title'>{title}</h2>
            </div>
        </div>
    );
};

export default Bookmark;