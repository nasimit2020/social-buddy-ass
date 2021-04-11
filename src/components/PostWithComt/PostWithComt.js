import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentWithPic from '../CommentWithPic/CommentWithPic';
import './PostWithComt.css'

const PostWithComt = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([])
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, []);
    return (
        <div className="postDetailsRap">
            <p>This is Post with components components: {id}</p>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
            {
                comments.map(comment => <CommentWithPic comment={comment}></CommentWithPic>)
            }
        </div>
    );
};

export default PostWithComt;