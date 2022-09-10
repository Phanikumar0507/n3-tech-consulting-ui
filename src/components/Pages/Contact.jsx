import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import N3Techlogo from '../N3Techlogo.png';
import './pages.css';

const Contact = () => {
    return (
        <div>
            <h1 className='page-header'> CONTACT US</h1>
            <div>
                <Row xs={1} md={2} className="g-4">
                    <Col className='page-content'>
                        N3 Tech LLC would like to hear from you. Please complete the form below if you are interested in obtaining more information about us,
                        a personalized quote for your project, or if you have any questions.
                        We will contact you in a timely manner.
                    </Col >
                    <Col>
                    <img src={N3Techlogo} alt="N3 tech" className='footer-logo pl-2'></img>
                    </Col>
                </Row >

            </div>
        </div>
    )
}

export default Contact;