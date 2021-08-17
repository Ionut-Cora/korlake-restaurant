import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.css';
import { Link } from 'react-router-dom';
import Second from '../../utils/img/second.jpg';

function Home() {
    return(
        <div>
            <Layout>
                <div id="head">
                    <div>

                        <h2 className="text-white">Welcome to</h2>
                        <h1 className="text-white">Korlake Restaurant</h1>
                        <Link to='/menu' id="menu-button">
                            <button id="top-button">Menu</button>
                        </Link>

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
                            <h3>View Our Story &#8594;</h3>
                        </Link>

                    </div>
                </div>

                <div id="menu-section">
                    <div className="container">
                        <h2 className="p-5">Some of Our Favorites</h2>

                        <div className="d-md-flex d-sm-block justify-content-around p-5">
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

                        <div className="d-md-flex d-sm-block justify-content-around p-5">
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

                        <div className="d-md-flex d-sm-block justify-content-around p-5">
                            <div className="col-md-6 col-sm-12 p-4">
                                <h3>Warm Chocolate Fudge Cake</h3>
                                <p>
                                    A creamy warm chocolate fudge cake, served with one cup of
                                    icecream.
                                </p>
                            </div>

                            <div className="col-md-6 col-sm-12 p-4"> 
                                <Link to='/menu' id="menu-button">
                                    <h3>
                                        View Our Full Menu &#8594;
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    )
}

export default Home;