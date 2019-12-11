import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
// import {getUser} from '../redux/reducer';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }


    
    render(){
        return(
            <div>Auth</div>
        )
    }
}


export default Auth;