import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import staffing1 from '../images/staffing1.jpeg'
import consulting from '../images/consulting.jpeg'
import training from '../images/training.jpeg'
import appdevelopment from '../images/appdevelopment.jpeg'

const Services = () => {
    return (
        <div className='services-page'>
            <h1 className='page-header'> OUR SERVICES</h1>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img className='service-image' variant="top" src={staffing1} />
                        <Card.Body>
                            <Card.Title>Recruitment Services</Card.Title>
                            <Card.Text className='page-content'>
                                Our knowledge and high level of experience empowers our clients,
                                by reducing their overall delivery time & costs and allowing them to entrust their recruitment
                                responsibilities to Idolsoft Consulting, they are enabled to commit to their core business.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='service-image' variant="top" src={consulting} />
                        <Card.Body>
                            <Card.Title>Consulting</Card.Title>
                            <Card.Text className='page-content'>
                                N3 Tech LLC helps you achieve and sustain this success through strategic,
                                functional and process transformation that enables you improve performance,
                                increase effectiveness, reduce costs and enhance resilience.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='service-image' variant="top" src={training} />
                        <Card.Body>
                            <Card.Title>Training</Card.Title>
                            <Card.Text className='page-content'>
                                We are focused on providing the highest quality consulting and teaching services available.
                                Our mission is to assist our clients in achieving success in the challenging areas of configuration management,
                                lifecycle design/ deployment, and operations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='service-image' variant="top" src={appdevelopment} />
                        <Card.Body>
                            <Card.Title>Application Development</Card.Title>
                            <Card.Text className='page-content'>
                                Custom software development is a complicated process.
                                Lot of people think that good technical expertise in software development is sufficient for a project's success.
                                Our expert team has taken part in dozens of application development projects.
                                We are experienced in developing advanced systems with complex business logic dealing with large amounts of data and transactions.
                                We are able to supply you with an innovative, trustworthy software solution to complement your most complicated business ideas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
}

export default Services;
