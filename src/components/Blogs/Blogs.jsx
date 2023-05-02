/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState(0);
    const [markAsRead, setMarkAsRead] = useState(0);
    const [title, setTitle] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const handleBookmark = (blog) => {
        let blogTitle = [];
        blogTitle.push(blog.title);
        setTitle([...title, ...blogTitle]);
        setMarkAsRead(markAsRead + 1);
    }
    const handleMarkAsRead = (blog) => {
        setBookmark(bookmark + blog.duration);
    }
    return (
        <main className='blogs'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
                }
            </div>
            <div>
                <Bookmark
                    bookmark={bookmark}
                    markAsRead={markAsRead}
                    titles={title}
                ></Bookmark>
            </div>
        </main>
    );
};

export default Blogs;