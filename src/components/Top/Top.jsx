import React from 'react';
import './Top.css';

function Top() {
    return(
        <div id="top">
            <div id="top-phone" className="hov">
                <ion-icon name="call-outline"></ion-icon>
                <p>0800800800</p>
            </div>
            <div id="top-other"  className="hov">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="mail-outline"></ion-icon>
                <ion-icon name="location-outline"></ion-icon>
            </div>
        </div>
    )
}

export default Top;