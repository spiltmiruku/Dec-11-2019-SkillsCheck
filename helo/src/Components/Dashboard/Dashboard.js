import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/reducer';
import axios from 'axios';

const Dashboard = (props) => {

    const logout = () => {
        console.log('hit')
        axios.post('/api/logout').then(res => {
            props.logout()
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }
        return(
            <div>
                <h1>Dashboard</h1>
                <p>{props.user.id}</p>
                <p>{props.user.username}</p>
                <button onClick={logout}> Log out </button>
            </div>
        )
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {logout}) (Dashboard);