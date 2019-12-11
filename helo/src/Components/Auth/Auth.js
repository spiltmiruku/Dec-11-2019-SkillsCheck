import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getUser} from '../../redux/reducer';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    handleRegister = () => {
        const { username, password } = this.state;
        axios.post('/api/register', { username, password }).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
       
    }

    render(){
        return(
            <div className='App'>
                <div className='form-box'>
                    <h1 style={{color: 'white'}}>Helo</h1>
                <input 
                maxLength='20'
                placeholder='Enter Username'
                name='username'
                onChange={(event) => this.handleInput(event)}
                    />
                <input 
                type='password'
                maxLength='20'
                placeholder='Enter Password'
                name='password'
                onChange={(event) => this.handleInput(event)}
                    />
                
                <Link to='/dashboard'> <button onClick={this.handleLogin}> Log in </button> </Link>
                
                <Link to='/dashboard'> <button onClick={this.handleRegister}> Register </button> </Link>
                </div>
            </div>
        )
    }
}


export default connect(null, {getUser}) (Auth);