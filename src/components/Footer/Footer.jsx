import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import N3Techlogo from '../N3Techlogo.png';
import './footer.css';

const Footer = ({ onTabClick }) => {
    return (
        <div className='footer'>
            <Container>
                <Row xs={1} md={4} className="g-4 pt-3">
                    <div>
                        <img src={N3Techlogo} alt="N3 tech" className='header-logo'></img>
                        <div>N3 Tech Consulting LLC, is a software product development organization, offering a wide range of software solutions.</div>
                    </div>
                    <div className='quick-links'>
                        <h4>QUICK LINKS</h4>
                        <a href="#about" className="footer-nav-link" onClick={() => onTabClick('about')}>About</a>
                        <a href="#services" className="footer-nav-link" onClick={() => onTabClick('services')}>Services</a>
                        <a href="#technology_staffing" className="footer-nav-link" onClick={() => onTabClick('staffing')}>Technology Staffing</a>
                        <a href="#careers" className="footer-nav-link" onClick={() => onTabClick('careers')}>Careers</a>
                        <a href="#contact_us" className="footer-nav-link" onClick={() => onTabClick('contact')}>Contact Us</a>
                    </div>
                    <div>
                        <h4>SPECIALIZATION</h4>
                        <div>IT Training</div>
                        <div>Cloud Services</div>
                        <div>Storage</div>
                        <div>Network Services</div>
                        <div>Programming</div>
                        <div>Marketing</div>
                    </div>
                    <div>
                        <h4>HAVE A QUESTION ?</h4>
                        <address>
                            N3 Tech Consulting LLC<br />
                            301 W Las Colinas blvd<br />
                            Irving, Texas-75039
                        </address>
                        <p>info@n3tech.com</p>
                        <p>(+1) 469-389-6388</p>
                    </div>
                </Row >
            </Container>
        </div >
    )
}
export default Footer;