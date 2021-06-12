import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
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
                            <Nav.Link id="menu-links" href="/">Home</Nav.Link>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/story">Story</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;