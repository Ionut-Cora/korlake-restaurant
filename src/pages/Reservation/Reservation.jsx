import React from "react";
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
        const form = document.getElementById('form');

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

            form.style.display = 'none';
            
            results.innerHTML = `
                <h3>Thank You !</h3>
                <p>Dear ${this.state.firstName} ${this.state.lastName}, <br>
                Thank you for your reservation for ${this.state.numberOfGuests} people on date of ${this.state.date}! <br>
                You will receive a confirmation on your address email ${this.state.email} <br>
                and if will be any issue, we will contact you on your phone number ${this.state.phoneNumber}.</p>               
            `;
        }
    }

    render() {
        return(
                    <div id="reservation-page">
                        <h2>Make a reservation</h2>
                        <form id="form" onSubmit={(event) => this.handleSubmit(event)}>
                            <div className="group">
                                <div className="mini-group">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" name="first-name" id="first-name" onChange={(event) => this.handleFirstName(event)} />
                                </div>
                                <div className="mini-group">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" onChange={(event) => this.handleLastName(event)} />
                                </div>
                            </div>
                            <div className="group">
                                <div className="mini-group">
                                    <label htmlFor="phone-number">Phone Number</label>
                                    <input type="tel" name="phone-number" id="phone-number" onChange={(event) => this.handlePhoneNumber(event)} />
                                </div>
                                <div className="mini-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" onChange={(event) => this.handleEmail(event)} />
                                </div>
                            </div>
                            <div className="group">
                                <div className="mini-group">
                                    <label htmlFor="date">Date</label>
                                    <input type="date" name="date" id="date" onChange={(event) => this.handleDate(event)} />
                                </div>
                                <div className="mini-group">
                                    <label htmlFor="guests">Number Of Guests</label>
                                    <input type="number" name="guests" id="guests" onChange={(event) => this.handleNumberOfGuests(event)} />
                                </div>
                            </div>
                            <label htmlFor="comments">Comments</label>
                            <textarea name="comments" cols="20" rows="3" id="comments" onChange={(event) => this.handleComments(event)}></textarea>
                            <input type="submit" id="submit-btn" />
                        </form>
                        <div id="results"></div>
                    </div>
        )
    }
}

export default Reservation;
