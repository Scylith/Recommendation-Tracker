import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import logo from "../assets/IdleMe_Logo.png"

const MyNavbar = () => (
  <Navbar className='Navbar' expand="lg">
    
    <Navbar.Brand href="#">
      <img 
      src={logo}
      class="logo"
      height="80px"
      width="80px"
      alt="Idle Me"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="Dashboard/">My Lists</Nav.Link>
        <Nav.Link as={Link} to="/Movies/">Search Movies</Nav.Link>
        <Nav.Link as={Link} to="/Anime/">Search Anime</Nav.Link>
        <Nav.Link as={Link} to="/Song/">Search Music</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
  </Navbar>
);

export default MyNavbar;

