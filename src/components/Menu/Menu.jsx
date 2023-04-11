import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Menu.css';
import Breakfastproduct from '../Products/Breakfastproduct';
import BreakfastImage from '../../utils/img/breakfast-img.jpg';
import LunchImage from '../../utils/img/lunch-img.jpg';
import DinnerImage from '../../utils/img/dinner-img.jpg';
import DessertImage from '../../utils/img/dessert-img.jpg';

const breakfastProducts = [
    { id: 1, name: 'English Breakfast', description: '2 sausages, 1 tomatoes, 150g mushrooms, 3 rashers smoked bacon, 2 sliced black pudding, 200g baked beans, 2 free-range eggs', price: 9.99, currency: '£' },
    { id: 2, name: 'Grilled Portobello Mushrooms with Cheese', description: '4 large portobello mushrooms, 200g goat s cheese, 50g rocket, toasted rye bread (optional)', price: 8.50, currency: '£' },
    { id: 3, name: 'Sweet Potato Fritters with Poached Eggs and Avocado', description: '2 grated sweet potatoes, 3 free-range eggs, 1/2 avocado, toasted bread (optional)', price: 7.00, currency: '£' },
];

const lunchProducts = [
    { id: 1, name: 'Chilli Prawn Salad with Red Cabbage and Carrot Slaw', description: '175g red cabbage, 175g carrots, 200g cooked large peeled prawns, red chilli dressing', price: 6.50, currency: '£' },
    { id: 2, name: 'Jerk Chicken with Mango Salsa', description: '2 chicken breasts, 1/2 mango, 1/4 cucumber, rice (optional)', price: 10.99, currency: '£' },
    { id: 3, name: 'Blackned Cod with Radish and Red Cabbage Slaw', description: '200g cod fillet, 8-10 radishes, 100g red cabbage', price: 9.00, currency: '£' },
];

const dinnerProducts = [
    { id: 1, name: 'Sea Bass with Roasted Vegetables', description: '2 sea bass fillets, 1 red pepper, 1 small red onion, 1 carrot, sweetcorn', price: 11.50, currency: '£' },
    { id: 2, name: 'One-pot Chicken and Chorizo', description: '4 chicken thinghs, 1 small red onion, chicken stock, 30g chorizo', price: 10.00, currency: '£' },
    { id: 3, name: 'Shepherd s Pie', description: '400g beef mince, 2 carrots, 2 celery sticks, 200g chopped tomatoes, 2 sweet potatoes', price: 14.00, currency:'£' },
];

const dessertProducts = [
    { id: 1, name: 'Warm Chocolate Fudge Cake', description: 'A delicious fudge cake with Ice Cream and custard', price: 4.99, currency: '£' },
    { id: 2, name: 'Hot and Steaming Apple Pie', description: 'A hot Apple Pie with Gelato Ice Cream', price: 3.00, currency: '£' },
    { id: 3, name: 'Cool and Refreshing Creamy Cheesecake', description: 'A creamy Cheesecake with Artisan Gelato Ice Cream', price: 5.50, currency: '£' },
];

function Menu() {
    return(
        <div>
            <Layout>
                <div className=''>
                    <div className="menu-product">
                        <div className="py-5 mt-5" id="breakfast">                  
                            <div className="container">
                                <h2 className='mb-3 mb-lg-5'>Breakfast</h2>

                                <Row xs={1} md={2} className="flex-column-reverse flex-md-row">
                                    <Col className="d-flex align-items-center">
                                        <img className='mb-4 mb-md-0' src={BreakfastImage} alt="" />
                                    </Col>

                                    <Col className="">                                       
                                        <div className="h-100 d-flex flex-column justify-content-center">
                                            {breakfastProducts.map((breakfastProduct) => (
                                                <div className="mb-4" key={breakfastProduct.id}>
                                                    <Breakfastproduct breakfastProduct={breakfastProduct} />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="menu-product background-dark text-light">
                        <div className="py-5" id="lunch">
                            <div className="container">
                                <h2 className='mb-3 mb-lg-5'>Lunch</h2>

                                <Row xs={1} md={2} className="">
                                    <Col className="">                                       
                                        <div className="h-100 d-flex flex-column justify-content-center">
                                            {lunchProducts.map((lunchProduct) => (
                                                <div className="mb-4" key={lunchProduct.id}>
                                                    <Breakfastproduct breakfastProduct={lunchProduct} />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>

                                    <Col className="d-flex align-items-center">
                                        <img className='mb-4 mb-md-0' src={LunchImage} alt="" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="menu-product">
                        <div className="py-5" id="dinner">
                            <div className="container">
                                <h2 className='mb-3 mb-lg-5'>Dinner</h2>

                                <Row xs={1} md={2} className="flex-column-reverse flex-md-row">
                                    <Col className="d-flex align-items-center">
                                        <img className='mb-4 mb-md-0' src={DinnerImage} alt="" />
                                    </Col>

                                    <Col className="">                                       
                                        <div className="h-100 d-flex flex-column justify-content-center">
                                            {dinnerProducts.map((dinnerProduct) => (
                                                <div className="mb-4" key={dinnerProduct.id}>
                                                    <Breakfastproduct breakfastProduct={dinnerProduct} />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="menu-product background-dark text-light">
                        <div className="py-5" id="dessert">
                            <div className="container">
                                <h2 className='mb-3 mb-lg-5'>Dessert</h2>

                                <Row xs={1} md={2} className="">
                                    <Col className="">                                       
                                        <div className="h-100 d-flex flex-column justify-content-center">
                                            {dessertProducts.map((dessertProduct) => (
                                                <div className="mb-4" key={dessertProduct.id}>
                                                    <Breakfastproduct breakfastProduct={dessertProduct} />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>

                                    <Col className="d-flex align-items-center">
                                        <img className='mb-4 mb-md-0' src={DessertImage} alt="" />
                                    </Col>
                                </Row>

                                <Link to='/contact'>
                                    <button className='btn btn-warning btn-lg shadow mt-5'>Reserve table</button>
                                </Link>
                            </div>                          
                        </div>                   
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Menu;