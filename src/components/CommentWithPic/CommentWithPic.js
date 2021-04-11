import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CommentWithPic = (props) => {
    const {id} = useParams();
    const [photos, setPhotos] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [])
    return (
        <div>
            <p><small>{props.comment.body}</small></p>
        </div>
    );
};

export default CommentWithPic;