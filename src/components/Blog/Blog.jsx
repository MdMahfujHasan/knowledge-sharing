/* eslint-disable */
import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const { blogImage, authorImage, authorName, publish, duration, title } = props.blog;
    const handleBookmark = props.handleBookmark;
    return (
        <div className='blog'>
            <img className='blog-img' src={blogImage} alt="Blog image" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className='author-img' src={authorImage} alt="Author image" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 className='author-name'>{authorName}</h3>
                        <p className='publish-date'>{publish}</p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <p className='read-duration'>{duration} mins read</p>
                    <button onClick={handleBookmark} className='btn-bookmark'><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
            <h1 className='blog-title'>{title}</h1>
        </div>
    );
};

export default Blog;