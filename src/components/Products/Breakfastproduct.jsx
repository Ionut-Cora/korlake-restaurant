import React from 'react';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Breakfastproduct ( { breakfastProduct } ) {
    return (
        <Card className="h-100 border-0">
            <Card.Body>
                <Card.Title className='text-center'>
                    <strong>{breakfastProduct.name}</strong>
                </Card.Title>
                <Card.Text className='text-center'>{breakfastProduct.description}</Card.Text>
                <Card.Text className='product-price text-warning text-center'>
                    <strong>{breakfastProduct.currency}{breakfastProduct.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Breakfastproduct;
