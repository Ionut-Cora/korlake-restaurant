import React from 'react';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Dessertproduct ( { dessertProduct } ) {
    return (
        <Card className="h-100 border-0">
            <Card.Body>
                <Card.Title className='text-center'>
                    <strong>{dessertProduct.name}</strong>
                </Card.Title>
                <Card.Text className='text-center'>{dessertProduct.description}</Card.Text>
                <Card.Text className='product-price text-warning text-center'>
                    <strong>{dessertProduct.currency}{dessertProduct.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Dessertproduct;
