import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import N3Techlogo from '../N3Techlogo.png';
import './pages.css';

const Contact = () => {
    return (
        <div>
            <h1 className='page-header'> CONTACT US</h1>
            <div>
                <Row xs={1} md={2} className="g-4">
                    <div className="col-12 col-lg-6">
                        <div className="section-heading pb-3">
                            <h4 className="sub-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                Ask how we can help you..
                            </h4>
                        </div>
                        <div className="contact-content">
                            <ul className="address-list" style={{ listStyleType: 'none' }} >
                                <li>
                                    <span><img src="https://d33wubrfki0l68.cloudfront.net/20c8532a910434ad4ffd284588c4e738d2894c10/e65a7/img/icons/maker.svg" alt="ico" /></span>
                                    <div>
                                        <h5>Our Office</h5>
                                        <address>
                                            N3 Tech Consulting LLC<br />
                                            301 W Las Colinas blvd<br />
                                            Irving, Texas-75039
                                        </address>
                                    </div>
                                </li>
                                <li>
                                    <span><img src="https://d33wubrfki0l68.cloudfront.net/aa53b251a48af880b7badc0cecfd36173549d223/959c9/img/icons/email-pink.svg" alt="icon" /></span>
                                    <p>info@n3tech.com</p>
                                </li>
                                <li>
                                    <span><img src="https://d33wubrfki0l68.cloudfront.net/0b093cfde04b0ffb44c768e3de57feeda7337914/53362/img/icons/phone-pink.svg" alt="icon" /></span>
                                    <p>(+1) 469-389-6388</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="Enter your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>

            </div>
        </div>
    )
}

export default Contact;

