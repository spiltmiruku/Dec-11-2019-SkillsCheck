import React from 'react';
import axios from 'axios';

function Post(props) {

        return(
            <div>
                <img src={props.post.img} alt='new post' style={{width: '200px'}} />
                <button onClick={() => props.deletePost(props.post.id)}> Delete Post </button>
            </div>
        )
    }

export default Post;

// import React, {Component} from 'react';
// import axios from 'axios';

// class Post extends Component() {
//     constructor(){
//         super();
//         this.state = {

//         };

//     }

//     render() {
//     return(
//             <div>
//                 <img src={this.props.post.img} alt='new post' style={{width: '200px'}} />
//                 <button onClick={() => this.props.deletePost(this.props.post.id)}> Delete Post </button>
//             </div>
//         )
//     }
// }

// export default Post;