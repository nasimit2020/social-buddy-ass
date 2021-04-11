import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = (props) => {
    const {title, body, id} = props.post;
    const history = useHistory();
    const handleClick = (id) =>{
        history.push(`/PostWithComt/${id}`)
    }
    return (
        <div className="post-details">
            <h4>{title}</h4>
            <p>{body}</p>
            {/* <Link to={`/PostWithComt/${id}`}> Go to Id no: {id}</Link> */}
            <Button onClick={() => handleClick(id)} variant="contained" color="primary">Click Me</Button>
        </div>
    );
};

export default PostDetails;