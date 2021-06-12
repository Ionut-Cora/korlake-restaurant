import React from 'react';
import './Products.css';

function Lunchproduct( { lunchProduct } ) {
    return(
        <div className="product">
            <h3 className="mb-5">{lunchProduct.name}</h3>
            <p className="description">{lunchProduct.description}</p>
            <p className="price">{lunchProduct.currency}{lunchProduct.price}</p>
        </div>
    )
}

export default Lunchproduct;
