import React from 'react';
import './Products.css';

function Breakfastproduct ( { breakfastProduct } ) {
    return (
        <div className="product">
            <h3 className="mb-5">{breakfastProduct.name}</h3>
            <p className="description">{breakfastProduct.description}</p>
            <p className="price">{breakfastProduct.currency}{breakfastProduct.price}</p>
        </div>
    );
}

export default Breakfastproduct;
