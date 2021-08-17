import React from 'react';
import Layout from '../../components/Layout/Layout';
import Phone from '../../utils/img/header.png';
import './Contact.css';

function Contact() {
    return(
        <div>
            <Layout>
                <div id="allcontacts">
                    <h1 className="m-5">Contact</h1>
                    <div className="m-5">
                        <ion-icon name="call-outline"></ion-icon>
                        <p>0800800800</p>
                    </div>
                    <div className="m-5">
                        <ion-icon name="mail-outline"></ion-icon>
                        <p>example@gmail.com</p>
                    </div>
                    <div className="m-5">
                        <ion-icon name="location-outline"></ion-icon>
                        <p>123 Fake Street</p>
                        <p>London WE0 1LO</p>
                    </div>
                    <div className="m-5">
                        <ion-icon name="time-outline"></ion-icon>
                        <p>Monday-Friday 8AM-22PM</p>
                        <p>Weekend 9AM-23PM</p>
                    </div>
                    <div id="phone">
                        <img src={Phone} alt="phone"/>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Contact;