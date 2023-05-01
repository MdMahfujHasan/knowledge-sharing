/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleBookmark = () => {
        setBookmark(bookmark + 1);
    }
    return (
        <main className='blogs'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                    ></Blog>)
                }
            </div>
            <div>
                <Bookmark
                    bookmark={bookmark}
                ></Bookmark>
            </div>
        </main>
    );
};

export default Blogs;