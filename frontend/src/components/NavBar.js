import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = ({ currentUser }) => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top">
      <Navbar.Brand><Link to="/">Trailblaze</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Item>Current User: {currentUser && currentUser.username}</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;