import React from 'react';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Lunchproduct( { lunchProduct } ) {
    return(
        <Card className="h-100 border-0">
            <Card.Body>
                <Card.Title className='text-center'>
                    <strong>{lunchProduct.name}</strong>
                </Card.Title>
                <Card.Text className='text-center'>{lunchProduct.description}</Card.Text>
                <Card.Text className='product-price text-warning text-center'>
                    <strong>{lunchProduct.currency}{lunchProduct.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Lunchproduct;
