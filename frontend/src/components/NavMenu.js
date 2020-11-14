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
        <div id="current-user">Logged in: {currentUser.email}</div>
        <UserSignup />
        <UserLogin />
        <UserLogout />
      </div>
    </div>
  )
}

export default NavMenu;