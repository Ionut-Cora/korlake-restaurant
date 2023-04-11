import React from 'react';
import Card from 'react-bootstrap/Card';
import './Products.css';

function Breakfastproduct ( { breakfastProduct } ) {
    return (
        <Card className="h-100 border-0">
            <Card.Body>
                <Card.Title>
                    <strong>{breakfastProduct.name}</strong>
                </Card.Title>
                <Card.Text>{breakfastProduct.description}</Card.Text>
                <Card.Text className='product-price text-warning'>
                    <strong>{breakfastProduct.currency}{breakfastProduct.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Breakfastproduct;
