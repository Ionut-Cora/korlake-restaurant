import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import './Menu.css';
import Breakfastproduct from '../Products/Breakfastproduct';
import Lunchproduct from '../Products/Lunchproduct';
import Dinnerproduct from '../Products/Dinnerproduct';
import Dessertproduct from '../Products/Dessertproduct';

const breakfastProducts = [
    { id: 1, name: 'English Breakfast', description: '2 sausages, 1 tomatoes, 150g mushrooms, 3 rashers smoked bacon, 2 sliced black pudding, 200g baked beans, 2 free-range eggs', price: 9.99, currency: '£' },
    { id: 2, name: 'Grilled Portobello Mushrooms with Cheese', description: '4 large portobello mushrooms, 200g goat s cheese, 50g rocket, toasted rye bread (optional)', price: 8.99, currency: '£' },
    { id: 3, name: 'Sweet Potato Fritters with Poached Eggs and Avocado', description: '2 grated sweet potatoes, 3 free-range eggs, 1/2 avocado, toasted bread (optional)', price: 7.99, currency: '£' },
];

const lunchProducts = [
    { id: 1, name: 'Chilli Prawn Salad with Red Cabbage and Carrot Slaw', description: '175g red cabbage, 175g carrots, 200g cooked large peeled prawns, red chilli dressing', price: 6.99, currency: '£' },
    { id: 2, name: 'Jerk Chicken with Mango Salsa', description: '2 chicken breasts, 1/2 mango, 1/4 cucumber, rice (optional)', price: 10.99, currency: '£' },
    { id: 3, name: 'Blackned Cod with Radish and Red Cabbage Slaw', description: '200g cod fillet, 8-10 radishes, 100g red cabbage', price: 9.99, currency: '£' },
];

const dinnerProducts = [
    { id: 1, name: 'Sea Bass with Roasted Vegetables', description: '2 sea bass fillets, 1 red pepper, 1 small red onion, 1 carrot, sweetcorn', price: 11.50, currency: '£' },
    { id: 2, name: 'One-pot Chicken and Chorizo', description: '4 chicken thinghs, 1 small red onion, chicken stock, 30g chorizo', price: 10.00, currency: '£' },
    { id: 3, name: 'Shepherd s Pie', description: '400g beef mince, 2 carrots, 2 celery sticks, 200g chopped tomatoes, 2 sweet potatoes', price: 14.00, currency:'£' },
];

const dessertProducts = [
    { id: 1, name: 'Warm Chocolate Fudge Cake', description: 'A delicious fudge cake with Ice Cream and custard', price: 4.99, currency: '£' },
    { id: 2, name: 'Hot and Steaming Apple Pie', description: 'A hot Apple Pie with Gelato Ice Cream', price: 3.99, currency: '£' },
    { id: 3, name: 'Cool and Refreshing Creamy Cheesecake', description: 'A creamy Cheesecake with Artisan Gelato Ice Cream', price: 5.50, currency: '£' },
];

function Menu() {
    return(
        <div>
            <Layout>

                <div id="head-title">
                    <h1>Menu</h1>
                </div>

                <div id="background-menu-title">
                    <div className="menu-title p-5" id="breakfast-title">
                        <h2>Breakfast</h2>
                    </div>
                </div>

                <div className="background-product">
                    <div className="p-5" id="breakfast">                  
                        <div className="container">
                            <div className="row">
                                {breakfastProducts.map((breakfastProduct) => (
                                    <div className="col-sm-12 col-md-4" key={breakfastProduct.id}>
                                        <Breakfastproduct breakfastProduct={breakfastProduct} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-title">
                    <h2 className="p-5">Lunch</h2>
                </div>

                <div className="background-product">
                    <div className="p-5" id="lunch">
                        <div className="container">
                            <div className="row">
                                {lunchProducts.map((lunchProduct) => (
                                    <div className="col-sm-12 col-md-4" key={lunchProduct.id}>
                                        <Lunchproduct lunchProduct={lunchProduct} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-title">
                    <h2 className="p-5">Dinner</h2>
                </div>

                <div className="background-product">
                    <div className="p-5" id="dinner">
                        <div className="container">
                            <div className="row">
                                {dinnerProducts.map((dinnerProduct) => (
                                    <div className="col-sm-12 col-md-4" key={dinnerProduct.id}>
                                        <Dinnerproduct dinnerProduct={dinnerProduct} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-title">
                    <h2 className="p-5">Dessert</h2>
                </div>

                <div className="background-product">
                    <div className="p-5" id="dessert">
                        <div className="container">
                            <div className="row">
                                {dessertProducts.map((dessertProduct) => (
                                    <div className="col-sm-12 col-md-4" key={dessertProduct.id}>
                                        <Dessertproduct dessertProduct={dessertProduct} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to='/contact'>
                            <button id="menu-reservation-btn">Reserve table</button>
                        </Link>
                    </div>                   
                </div>


            </Layout>
        </div>
    )
}

export default Menu;