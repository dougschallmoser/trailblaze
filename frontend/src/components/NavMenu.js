import React from 'react';
import { useSelector } from 'react-redux';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';

const NavMenu = () => {

  const currentUser = useSelector(state => state.currentUser);

  return (
    <div id="menu-toggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <div id="menu">
        <UserSignup />
        <UserLogin />
        <UserLogout />
        <div id="current-user">Current User: {currentUser && currentUser.email}</div>
      </div>
    </div>
  )
}

export default NavMenu;