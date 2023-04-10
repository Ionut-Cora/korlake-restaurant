import React from 'react';
import Layout from '../../components/Layout/Layout';
import Reviews from '../../components/Reviews/Reviews';
import './Home.css';
import { Link } from 'react-router-dom';
import Second from '../../utils/img/second.jpg';
import f1 from '../../utils/img/f1.jpg';
import f2 from '../../utils/img/f2.jpg';
import f3 from '../../utils/img/f3.jpg';
import f9 from '../../utils/img/f9.jpg';

function Home() {
        return(
            <div>
                <Layout>
                    <div className='h-100 d-flex align-items-center min-vh-100' id="head">
                        <div className='container'> 
                            <h2 className="text-white text-capitalize">Welcome to</h2>
                            <h1 className="text-white text-capitalize">Korlake restaurant</h1>
                            <div className='mt-4'>
                                <Link to='/menu' id="menu-button">
                                    <button type='btn' className='btn btn-warning btn-lg text-uppercase px-5 mx-2 my-2 my-sm-0' id="top-button">Menu</button>
                                </Link>
                                <Link to='/contact' id="reservation-button">
                                    <button type='btn' className='btn btn-outline-warning btn-lg text-uppercase mx-2 my-2 my-sm-0' id="top-reservation-button">Reserve table</button>
                                </Link>
                            </div>                          
                        </div>    
                    </div>
    
                    <div className="container d-md-flex d-sm-block" id="second-section">
                        <div className="col-md-6 col-sm-12" id="second-img">
                            <img src={Second} alt="second"/>
                        </div>
                        <div className="col-md-6 col-sm-12" id="second-section-patagraphs">
                            <p className="m-5">
                                Here at Korlake Restaurant we take pride in the 
                                quality of the products used for each and every plate.
                            </p>
                            <p className="m-5">
                                We will probably give excellent client benefit, 
                                the best quality fixings, and a noteworthy affair 
                                whether it’s an uncommon occasion, easygoing social event 
                                of companions or a sentimental night out on the town.
                            </p>
    
                            <Link to="/story" id="story-button">
                                <button>View Our Story</button>
                            </Link>
    
                        </div>
                    </div>
    
                    <div id="menu-section">
                        <div className="container">
                            <h2 className="p-5">Some of Our Favorites</h2>
    
                            <div className="dish-card d-md-flex d-sm-block justify-content-around">
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3>English Breakfast</h3>
                                    <p>
                                        A full plate of sausages, tomatoes, mushrooms, bacon, 
                                        black pudding, beans, served with toasted bread.
                                    </p>
                                </div>
    
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3>Spicy Beef Barbecue With Potatoes</h3>
                                    <p>
                                        A juicy spicy beef stake with roast potatoes and white
                                        creamy sauce.
                                    </p>
                                </div>
                            </div>
    
                            <div className="dish-card d-md-flex d-sm-block justify-content-around">
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3>Roasty Trout with vegetables</h3>
                                    <p>
                                        A portion of roasty juicy trout, served with roast organic
                                        vegetables from the farm.
                                    </p>
                                </div>
    
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3>Spaghetti Bolognese</h3>
                                    <p>
                                        A big portion of the true italian receipe of 
                                        spaghetti bolognese. The receipe is come directly from Italy.
                                    </p>
                                </div>
                            </div>
    
                            <div className="dish-card d-md-flex d-sm-block justify-content-around">
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3>Warm Chocolate Fudge Cake</h3>
                                    <p>
                                        A creamy warm chocolate fudge cake, served with one cup of
                                        icecream.
                                    </p>
                                </div>
    
                                <div className="col-md-6 col-sm-12 p-4"> 
                                    <Link to='/menu'>
                                        <button>View Our Full Menu</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div id="food-section">
                            <div id="food-card">
                                <div className="food-div">
                                    <img src={f1} alt="salmon and poached egg bruschetta" />
                                    <p>Salmon and Poached Egg Bruschetta</p>
                                </div>
                                <div className="food-div">
                                    <img src={f2} alt="pumpkin soup" />
                                    <p>Pumpkin Soup</p>
                                </div>
                                <div className="food-div">
                                    <img src={f3} alt="Pork, baked potatoes, eggs and vegetables" />
                                    <p>Pork, Baked Potatoes, Eggs and Vegetables</p>
                                </div>
                                <div className="food-div">
                                    <img src={f9} alt="Tiramisu" />
                                    <p>Tiramisu</p>
                                </div>
                            </div>
                    </div>
    
                    <Reviews />
    
                </Layout>
            </div>
        )
}

export default Home;