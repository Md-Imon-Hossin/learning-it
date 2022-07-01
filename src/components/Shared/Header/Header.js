import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  // NavLink active style
  let activeStyle = {
    color: "#FFFAF0",
    fontWeight: "bold"
  };
  return (
    // NavLink start
    <Navbar className='header-bg sticky-top' expand="lg">
      <Container className='container'>
        <Navbar.Brand className='text-white learning-it'>
          <span className='learning-icon'><i className="fa fa-chalkboard"></i></span>
          Learning IT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-end">
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              className='navLink' to='/home'
            >Home</NavLink>
            <NavLink className='navLink' to='/about'
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
            >About</NavLink>
            <NavLink className='navLink' to='/services'
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
            >Services</NavLink>
            <NavLink className='navLink' to='/contact'
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
            >Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;