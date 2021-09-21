import React from "react";
import './Reviews.css';

function Reviews() {
    return(
        <div id="reviews-page">
            <h2>Reviews</h2>
            <div id="reviews">
                <div className="review-post">
                    <p>"The Korlake Restaurant's dishes are simple, healthy, fresh and so delicious."</p>
                    <h4>John Wayne</h4>
                </div>
                <div className="review-post">
                    <p>"I will come back very soon to Korlake Restaurant with all my family and friends."</p>
                    <h4>Ellie White</h4>
                </div>
                <div className="review-post">
                    <p>"Great restaurant, great staff, great food."</p>
                    <h4>Michael Bourne</h4>
                </div>
                <div className="review-post">
                    <p>"Very elegant and in the same time very simple dishes."</p>
                    <h4>Anne William</h4>
                </div>
            </div>
        </div>
    )
}

export default Reviews;
