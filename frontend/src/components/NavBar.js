import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions';
import UserSignup from './UserSignup';

const NavBar = () => {

  const user = useSelector(state => state.users);
  const theState = useSelector(state => state)
  const dispatch = useDispatch();
  console.log('current state is:', theState)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className="navbar">
      <Link to="/" className="nav-logo">Trailblaze</Link>
      <UserSignup />
      <Link to="/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/map">Map</Link>
      <span id="current-user">Current User: {user.currentUser && user.currentUser.username}</span>
    </div>
  )
}

export default NavBar;