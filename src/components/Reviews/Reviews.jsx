import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Reviews.css';
import Person1 from '../../utils/img/person1.jpg';
import Person2 from '../../utils/img/person2.jpg';
import Person3 from '../../utils/img/person3.jpg';
import Person4 from '../../utils/img/person4.jpg';

function Reviews() {
    return(
        <div className="py-5" id="reviews-page">
            <div className="container">
                <h2 className="mb-5">Reviews</h2>
                <div id="reviews">
                    <Row xs={1} md={2} className="g-4">
                        <Col className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Body>
                                    <div className="p-4">
                                        <Card.Text>
                                            "The Korlake Restaurant's dishes are simple, healthy, fresh and so delicious."
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center">
                                    <img src={Person1} className="img-fluid rounded-circle m-3 w-25" alt="customer img" />
                                    <Card.Title>John Wayne</Card.Title>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Body>
                                    <div className="p-4">
                                        <Card.Text>
                                            "I will come back very soon to Korlake Restaurant with all my family and friends."
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center">
                                    <img src={Person2} className="img-fluid rounded-circle m-3 w-25" alt="customer img" />
                                    <Card.Title>Ellie White</Card.Title>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Body>
                                    <div className="p-4">
                                        <Card.Text>
                                            "Great restaurant, great staff, great food."
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center">
                                    <img src={Person3} className="img-fluid rounded-circle m-3 w-25" alt="customer img" />
                                    <Card.Title>Michael Bourne</Card.Title>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="mb-4">
                            <Card className="h-100 shadow">
                                <Card.Body>
                                    <div className="p-4">
                                        <Card.Text>
                                            "Very elegant and in the same time very simple dishes."
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center">
                                    <img src={Person4} className="img-fluid rounded-circle m-3 w-25" alt="customer img" />
                                    <Card.Title>Anne William</Card.Title>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Reviews;
