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
                    <div className="container py-5">
                        <h1 className='text-center text-capitalize mt-5'>Contact &amp; reservations</h1>
                        <div className='row pt-5' id="contact-reservations">
                            <div className='col-12 col-lg-7 d-flex align-items-center justify-content-center' id="reservations-div">
                                <Reservation />
                            </div>

                            <div className='col-12 col-lg-5 d-flex flex-column justify-content-around mt-5 mt-lg-0' id="allcontacts">
                                <div className="hov d-flex flex-column align-items-center">
                                    <ion-icon name="call-outline"></ion-icon>
                                    <p>0800800800</p>
                                </div>
                                <div className="hov d-flex flex-column align-items-center">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <p>example@email.com</p>
                                </div>
                                <div className="hov d-flex flex-column align-items-center">
                                    <ion-icon name="location-outline"></ion-icon>
                                    <p>123 Street Name</p>
                                    <p>London WE0 1LO</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <ion-icon name="time-outline"></ion-icon>
                                    <p>Monday-Friday 8:00am-10:00pm</p>
                                    <p>Weekend 9:00am-11:00pm</p>
                                </div>
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