import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './components.css';

const Header = () => {
    return (
        <div className='navPosition'>
            <Navbar bg="success" variant="dark" expand="lg">
                <div className="container-fluid">
                    <Navbar.Brand className="mr-auto">MediCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="nav-link">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/news" className="nav-link">News</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
                        </Nav>
                        <button className='btn btn-outline-warning' style={{marginLeft:"5px"}}>BookNow</button>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;




