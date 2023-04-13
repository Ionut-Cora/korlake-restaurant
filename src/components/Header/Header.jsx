import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
    return(
        <div id="navbar">
            <Navbar className='fixed-top' bg="warning" variant='light' expand="lg">
            <Container>
                <Link className="text-dark text-decoration-none" id="logo" to="/">Korlake</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link active text-uppercase" to="/">Home</Link>
                    <Link className="nav-link text-uppercase" to="/menu">Menu</Link>
                    <Link className="nav-link text-uppercase" to="/story">Story</Link>
                    <div className='mx-lg-2 my-2 my-lg-0'>
                        <Button className='text-uppercase' variant='outline-dark' href="#contact">Book a table</Button>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header;