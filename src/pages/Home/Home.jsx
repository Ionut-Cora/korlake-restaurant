import React from 'react';
import Layout from '../../components/Layout/Layout';
import Reviews from '../../components/Reviews/Reviews';
import './Home.css';
import { Link } from 'react-router-dom';
import Image from '../../utils/img/about-image.jpg';
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
                            <h2 className="text-white text-center text-capitalize">Welcome to</h2>
                            <h1 className="text-white text-center text-capitalize">Korlake restaurant</h1>
                            <div className='d-flex justify-content-center align-items-center flex-column flex-sm-row mt-4'>
                                <Link to='/menu' id="menu-button">
                                    <button type='btn' className='btn btn-warning btn-lg text-uppercase mx-2 my-2 my-sm-0' id="top-button">Our menu</button>
                                </Link>
                                <Link to='/contact' id="reservation-button">
                                    <button type='btn' className='btn btn-outline-warning btn-lg text-uppercase mx-2 my-2 my-sm-0' id="top-reservation-button">Book a table</button>
                                </Link>
                            </div>                          
                        </div>    
                    </div>
    
                    <div className='py-5' id="second-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex align-items-center" id="second-img">
                                    <img src={Image} alt="about img"/>
                                </div>
                                <div className="col-12 col-lg-6" id="second-section-patagraphs">
                                    <p className="text-center m-5">
                                        Here at Korlake Restaurant we take pride in the 
                                        quality of the products used for each and every plate.
                                    </p>
                                    <p className="text-center m-5">
                                        We will probably give excellent client benefit, 
                                        the best quality fixings, and a noteworthy affair 
                                        whether it’s an uncommon occasion, easygoing social event 
                                        of companions or a sentimental night out on the town.
                                    </p>
            
                                    <div className='d-flex justify-content-center'>
                                        <Link to="/story" id="story-button">
                                            <button className='btn btn-dark btn-lg text-capitalize shadow'>View our story</button>
                                        </Link>
                                    </div>
            
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className='text-light py-5' id="menu-section">
                        <div className="container">
                            <h2 className="text-center text-capitalize mb-5">Some of our favorites</h2>
    
                            <div className="dish-card d-md-flex d-sm-block justify-content-around">
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3 className='text-center text-capitalize'>English breakfast</h3>
                                    <p className='text-center'>
                                        A full plate of sausages, tomatoes, mushrooms, bacon, black pudding, beans, served with toasted bread.
                                    </p>
                                </div>
    
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3 className='text-center text-capitalize'>Spicy beef barbecue with potatoes</h3>
                                    <p className='text-center'>
                                        A juicy spicy beef stake with roast potatoes and white creamy sauce.
                                    </p>
                                </div>
                            </div>
    
                            <div className="dish-card d-md-flex d-sm-block justify-content-around">
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3 className='text-center text-capitalize'>Roasty trout with vegetables</h3>
                                    <p className='text-center'>
                                        A portion of roasty juicy trout, served with roast organic vegetables from the farm.
                                    </p>
                                </div>
    
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3 className='text-center text-capitalize'>Spaghetti bolognese</h3>
                                    <p className='text-center'>
                                        A big portion of the true italian receipe of spaghetti bolognese. The receipe is come directly from Italy.
                                    </p>
                                </div>
                            </div>
    
                            <div className="dish-card d-md-flex d-sm-block justify-content-around">
                                <div className="col-md-6 col-sm-12 p-4">
                                    <h3 className='text-center text-capitalize'>Warm chocolate fudge cake</h3>
                                    <p className='text-center'>
                                        A creamy warm chocolate fudge cake, served with one cup of icecream.
                                    </p>
                                </div>
    
                                <div className="col-md-6 col-sm-12 p-4 d-flex align-items-center justify-content-center"> 
                                    <Link to='/menu'>
                                        <button className='btn btn-light btn-lg'>View Our Full Menu</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div id="food-section">
                            <div id="food-card">
                                <div className="row m-0">
                                    <div className="food-div col-12 col-sm-6 col-lg-3 p-0 d-flex align-items-center justify-content-center">
                                        <img className='w-100' src={f1} alt="salmon and poached egg bruschetta" />
                                        <p className='text-center text-uppercase position-absolute w-75 text-light'>
                                            <strong>Poached egg bruschetta</strong>
                                        </p>
                                    </div>
                                    <div className="food-div col-12 col-sm-6 col-lg-3 p-0 d-flex align-items-center justify-content-center">
                                        <img className='w-100' src={f2} alt="pumpkin soup" />
                                        <p className='text-center text-uppercase position-absolute w-75 text-light'>
                                            <strong>Pumpkin soup</strong>
                                        </p>
                                    </div>
                                    <div className="food-div col-12 col-sm-6 col-lg-3 p-0 d-flex align-items-center justify-content-center">
                                        <img className='w-100' src={f3} alt="Pork, baked potatoes, eggs and vegetables" />
                                        <p className='text-center text-uppercase position-absolute w-75 text-light'>
                                            <strong>Pork and vegetables</strong>
                                        </p>
                                    </div>
                                    <div className="food-div col-12 col-sm-6 col-lg-3 p-0 d-flex align-items-center justify-content-center">
                                        <img className='w-100' src={f9} alt="Tiramisu" />
                                        <p className='text-center text-uppercase position-absolute w-75 text-light'>
                                            <strong>Tiramisu</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
    
                    <Reviews />
    
                </Layout>
            </div>
        )
}

export default Home;