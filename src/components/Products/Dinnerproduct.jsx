import React from 'react';
import './Products.css';

function Dinnerproduct( { dinnerProduct } ) {
    return(
        <div className="product">
            <h3 className="mb-5">{dinnerProduct.name}</h3>
            <p className="description">{dinnerProduct.description}</p>
            <p className="price">{dinnerProduct.currency}{dinnerProduct.price}</p>
        </div>
    )
}

export default Dinnerproduct;
