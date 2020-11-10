import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const user = useSelector(state => state.users);
  const theState = useSelector(state => state)
  console.log('current state is:', theState)

  return (
    <div className="navbar">
      <Link to="/" className="nav-logo">Trailblaze</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/create">Create</Link>
      <span id="current-user">Current User: {user.currentUser && user.currentUser.username}</span>
    </div>
  )
}

export default NavBar;