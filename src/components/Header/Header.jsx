import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <div id="navbar">
            <Navbar id="nav" expand="lg">
                <div className="d-flex container">
                    <Link id="logo" to="/">Korlake</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" id="home-link" to="/">Home</Link>
                            <Link className="nav-link" id="menu-link" to="/menu">Menu</Link>
                            <Link className="nav-link" id="story-link" to="/story">Story</Link>
                            <Link className="nav-link" id="contact-link" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;