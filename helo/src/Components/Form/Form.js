import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Post from '../Post/Post';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            title: '',
            img: '',
            content: ''
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user.author_id}`).then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    addPost = () => {
        axios.post(`api/posts/${this.props.user.author_id}`, {title: this.state.title}, {img: this.state.img}, {content: this.state.content}).then(res => {
            this.setState({
                posts: res.data,
                title: '',
                img: '',
                content: ''
            })
        })
        .catch(err => console.log(err))
    }

    deletePost = id => {
        axios.delete(`/api/posts/${id}/${this.props.user.author_id}`).then(res => {
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

                <h1>NEW POST</h1>
                <input onChange={event => this.handleInput(event)} value={this.state.title} placeholder='Title here'></input>

                <input onChange={event => this.handleInput(event)} value={this.state.img} placeholder='Image link here'></input>

                <input onChange={event => this.handleInput(event)} value={this.state.content} placeholder='Content here'></input>



                <button onClick={this.addPost}> Publish Post </button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps) (Form);