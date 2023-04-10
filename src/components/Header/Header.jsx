import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return(
        <div id="navbar">
            <Navbar className='fixed-top' bg="warning" expand="lg">
            <Container>
                <Navbar.Brand href="/">Korlake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='active text-uppercase' href="/">Home</Nav.Link>
                    <Nav.Link className='text-uppercase' href="#menu">Menu</Nav.Link>
                    <Nav.Link className='text-uppercase' href="#story">Story</Nav.Link>
                    <Nav.Link className='text-uppercase' href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            {/* <Navbar id="nav" expand="lg">
                <div className="d-flex container">
                    <Link id="logo" to="/">Korlake</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" id="home-link" to="/">Home</Link>
                            <Link className="nav-link" id="menu-link" to="/menu">Menu</Link>
                            <Link className="nav-link" id="story-link" to="/story">Story</Link>
                            <Link className="nav-link" id="contact-link" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar> */}
        </div>
    )
}

export default Header;