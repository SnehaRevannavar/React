import React, { Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {authService} from '../services/authService';

 class Navigation extends Component{
    render(){
        return <div>
            <NavLink exact={true} activeClassName="activeLink" to="/">Home</NavLink> |
            {
                authService.checkUserStatus() ? <span>
                <NavLink activeClassName="activeLink" to="/users">Users</NavLink> |
                <NavLink activeClassName="activeLink" to="/create">Create</NavLink>
                </span> : ''
            }
        </div>
    }
}
export default Navigation;