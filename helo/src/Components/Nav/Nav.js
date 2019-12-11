import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {
        return(
            <div>
                <Link to='/dashboard'> Dashboard </Link>
                <Link to='/post'> Post </Link>
            </div>
        )
    }

export default Nav;