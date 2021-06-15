import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <div id="navbar">
            <Navbar fixed="top" bg="light" expand="lg">
                <div className="d-flex container">
                    <Navbar.Brand id="logo" href="/">Korlake</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link id="menu-links" to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/story">Story</Link>
                            <Link to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;