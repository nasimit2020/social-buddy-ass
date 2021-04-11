import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = (props) => {
    const {title, body, id} = props.post;
    return (
        <div className="post-details">
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/PostWithComt/${id}`}> Go to Id no: {id}</Link>
            {/* <Button variant="contained" color="primary">Details Now</Button> */}
        </div>
    );
};

export default PostDetails;