import React from 'react';
import Layout from '../../components/Layout/Layout';
import Phone from '../../utils/img/header.png';
import Reservation from '../Reservation/Reservation';
import Reviews from '../../components/Reviews/Reviews';
import './Contact.css';

function Contact() {
    return(
        <div>
            <Layout>
                <div id="contact-page">
                    <h1>Contact &amp; Reservations</h1>
                    <div id="contact-reservations">
                        <div id="reservations-div">
                            <Reservation />
                        </div>

                        <div id="allcontacts">
                            <div className="hov m-5">
                                <ion-icon name="call-outline"></ion-icon>
                                <p>0800800800</p>
                            </div>
                            <div className="hov m-5">
                                <ion-icon name="mail-outline"></ion-icon>
                                <p>example@gmail.com</p>
                            </div>
                            <div className="hov m-5">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>123 Fake Street</p>
                                <p>London WE0 1LO</p>
                            </div>
                            <div className="m-5">
                                <ion-icon name="time-outline"></ion-icon>
                                <p>Monday-Friday 8:00am-10:00pm</p>
                                <p>Weekend 9:00am-11:00pm</p>
                            </div>
                        </div>
                        
                    </div>

                    <Reviews />

                </div>

                <div id="phone">
                    <img src={Phone} alt="phone"/>
                </div>
            </Layout>
        </div>
    );
}

export default Contact;