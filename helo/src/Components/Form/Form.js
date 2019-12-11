import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Post from '../Post/Post';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            img: ''
        }
    }

    handleInput = event => {
        this.setState({
            img: event.target.value
        })
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user.id}`).then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    addPost = () => {
        axios.post(`api/posts/${this.props.user.id}`, {img: this.state.image}).then(res => {
            this.setState({
                posts: res.data,
                img: ''
            })
        })
        .catch(err => console.log(err))
    }

    deletePost = id => {
        axios.delete(`/api/posts/${id}/${this.props.user.id}`).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    render(){
        const mappedPosts = this.state.posts.map((post, index) => {
            return (
                <Post deletePost={this.deletePost} key={index} post={post} />
            )
        })
        return(
            <div>
                {mappedPosts}
                <input onChange={event => this.handleInput(event)} value={this.state.img} placeholder='Image link here'></input>
                <button onClick={this.addPost}> Public Post </button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps) (Form);