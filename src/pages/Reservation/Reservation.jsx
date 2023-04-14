import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Reservation.css';

class Reservation extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            date: '',
            numberOfGuests: '',
            comments: ''
        }
    }

    handleFirstName(event) {
        const firstName = event.target.value;
        this.setState({firstName: firstName});
    }

    handleLastName(event) {
        const lastName = event.target.value;
        this.setState({lastName: lastName});
    }

    handlePhoneNumber(event) {
        const phoneNumber = event.target.value;
        this.setState({phoneNumber: phoneNumber});
    }

    handleEmail(event) {
        const email = event.target.value;
        this.setState({email: email});
    }

    handleDate(event) {
        const date = event.target.value;
        this.setState({date: date});
    }

    handleNumberOfGuests(event) {
        const numberOfGuests = event.target.value;
        this.setState({numberOfGuests: numberOfGuests});
    }

    handleComments(event) {
        const comments = event.target.value;
        this.setState({comments: comments});
    }

    handleSubmit(event) {
        event.preventDefault();

        const results = document.getElementById('results');
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const phoneNumber = document.getElementById('phone-number');
        const email = document.getElementById('email');
        const date = document.getElementById('date');
        const guests = document.getElementById('guests');

        if (this.state.firstName === '') {
            firstName.style.border = '1px solid red';
        } else {
            firstName.style.border = '1px solid black';
        } 
        
        if (this.state.lastName === '') {
            lastName.style.border = '1px solid red';
        } else {
            lastName.style.border = '1px solid black';
        }
        
        if (this.state.phoneNumber === '') {
            phoneNumber.style.border = '1px solid red';
        } else {
            phoneNumber.style.border = '1px solid black';
        }
        
        if (this.state.email === '') {
            email.style.border = '1px solid red';
        } else {
            email.style.border = '1px solid black';
        }    
        
        if (this.state.date === '') {
            date.style.border = '1px solid red';
        } else {
            date.style.border = '1px solid black';
        }
        
        if (this.state.numberOfGuests === '') {
            guests.style.border = '1px solid red';
        } else {
            guests.style.border = '1px solid black';
        }
        
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.phoneNumber !== '' && this.state.email !== '' && this.state.date !== '' && this.state.numberOfGuests !== '') {
            
            results.innerHTML = `
                <div class="modal" id="modal" tabindex="-1">
                    <div class="modal-dialog d-flex align-items-center">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Thank You!</h5>
                                <button type="button" class="btn-close btn-warning border-0 d-flex align-items-center justify-content-center" id="header-close-btn" data-bs-dismiss="modal" aria-label="Close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Dear ${this.state.firstName} ${this.state.lastName}, <br>
                                Thank you for your reservation for ${this.state.numberOfGuests} people on date of ${this.state.date}! <br>
                                You will receive a confirmation on your address email ${this.state.email} <br>
                                and if will be any issue, we will contact you on your phone number ${this.state.phoneNumber}.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-warning" id="footer-close-btn" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        const modalHeaderClose = document.getElementById('header-close-btn');
        const modalFooterClose = document.getElementById('footer-close-btn');

        modalHeaderClose.addEventListener('click', () => {
            window.location.reload(false);
        });
        modalFooterClose.addEventListener('click', () => {
            window.location.reload(false);
        });
    }

    render() {
        return(
            <div id="reservation-page">
                <Form className="bg-warning p-5" id="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="first-name" className="text-capitalize">First name</Form.Label>
                            <Form.Control type="text" name="first-name" id="first-name" onChange={(event) => this.handleFirstName(event)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="last-name" className="text-capitalize">Last name</Form.Label>
                            <Form.Control type="text" name="last-name" id="last-name" onChange={(event) => this.handleLastName(event)} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="phone-number" className="text-capitalize">Phone number</Form.Label>
                            <Form.Control type="tel" name="phone-number" id="phone-number" onChange={(event) => this.handlePhoneNumber(event)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="email" className="text-capitalize">Email address</Form.Label>
                            <Form.Control type="email" name="email" id="email" onChange={(event) => this.handleEmail(event)} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="date">Date</Form.Label>
                            <Form.Control type="date" name="date" id="date" onChange={(event) => this.handleDate(event)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="guests" className="text-capitalize">Number of guests</Form.Label>
                            <Form.Control type="number" name="guests" id="guests" onChange={(event) => this.handleNumberOfGuests(event)} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="comments">Comments</Form.Label>
                        <Form.Control as="textarea" name="comments" cols={20} rows={3} id="comments" onChange={(event) => this.handleComments(event)} />
                    </Form.Group>

                    <Button variant="dark" type="submit" id="submit-btn">
                        Submit
                    </Button>
                </Form>

                <div id="results"></div>
            </div>
        )
    }
}

export default Reservation;
