import React from 'react';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Dinnerproduct( { dinnerProduct } ) {
    return(
        <Card className="h-100 border-0">
            <Card.Body>
                <Card.Title>
                    <strong>{dinnerProduct.name}</strong>
                </Card.Title>
                <Card.Text>{dinnerProduct.description}</Card.Text>
                <Card.Text className='product-price text-warning'>
                    <strong>{dinnerProduct.currency}{dinnerProduct.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Dinnerproduct;
