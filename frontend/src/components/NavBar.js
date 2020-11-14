import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const NavBar = () => {

  const theState = useSelector(state => state)
  console.log('current state is:', theState)

  return (
    <>
      <NavMenu />
      <div className="navbar">
      <Link to="/" className="nav-logo"><span>Trail</span>blaze</Link>
      <Link to="/map">Map</Link>
    </div>
    </>
  )
}

export default NavBar;