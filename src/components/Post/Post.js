import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            {
                posts.map(post => <PostDetails post={post}></PostDetails>)
            }
        </div>
    );
};

export default Post;