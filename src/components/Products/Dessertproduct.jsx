import React from 'react';
import './Products.css';

function Dessertproduct ( { dessertProduct } ) {
    return (
        <div className="product">
            <h3 className="mb-5">{dessertProduct.name}</h3>
            <p className="description">{dessertProduct.description}</p>
            <p className="price">{dessertProduct.currency}{dessertProduct.price}</p>
        </div>
    )
}

export default Dessertproduct;
