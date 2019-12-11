import React, {Component} from 'react';

function Post(props) {

        return(
            <div>
                <img src={props.post.img} alt='new post' style={{width: '200px'}} />
                <button onClick={() => props.deletePost(props.post.id)}> Delete Post </button>
            </div>
        )
    }

export default Post;