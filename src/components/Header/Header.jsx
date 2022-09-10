import React from 'react';
import N3Techlogo from '../N3Techlogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.css';

const Header = ({ onTabClick }) => {
    return (
        <div className='header'>
            <Navbar className='header-navbar' variant="dark">
                <Container>
                    <img src={N3Techlogo} alt="N3 tech" className='header-logo pl-2'></img>
                    <Nav className="me-auto header-nav">
                        <Nav.Link href="#about" className="header-nav-link" onClick={() => onTabClick('about')}>About</Nav.Link>
                        <Nav.Link href="#services" className="header-nav-link" onClick={() => onTabClick('services')}>Services</Nav.Link>
                        <Nav.Link href="#technology_staffing" className="header-nav-link" onClick={() => onTabClick('staffing')}>Technology Staffing</Nav.Link>
                        <Nav.Link href="#careers" className="header-nav-link" onClick={() => onTabClick('careers')}>Careers</Nav.Link>
                        <Nav.Link href="#contact_us" className="header-nav-link" onClick={() => onTabClick('contact')}>Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;