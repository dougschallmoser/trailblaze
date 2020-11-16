import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const NavBar = () => {

  return (
    <>
      <NavMenu />
      <div className="navbar">
        <Link to="/" className="nav-logo"><span>Trail</span>blaze</Link>
      </div>
    </>
  )
}

export default NavBar;