import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Story.css';
import Beef from '../../utils/img/beef.jpg';
import Chocolate from '../../utils/img/chocolate.jpg';
import Veggies from '../../utils/img/veggies.jpg';
import Header from '../../utils/img/header.png'
import Stage from '../../utils/img/stage.jpg';

function Story() {
    return(
        <div>
            <Layout>
                <div id="allstory">
                    <h1 className="m-5">Story</h1>
                    <h3>Quality food, great times</h3>
                    <div className="container" id="food">
                        <img src={Beef} className="rounded" alt="beef"/>
                        <img src={Chocolate} className="rounded" alt="chocolate"/>
                        <img src={Veggies} className="rounded" alt="veggies"/>
                    </div>
                    <div className="container" id="paragraphs">
                        <p>
                            Since our modest beginnings in 2011 with a little space 
                            in London’s stylish locale, Korlake‘s development has 
                            been enlivened with the energy to cook and serve perfect plates.
                        </p>
                        <p>
                            Here at Korlake Restaurant we take pride in the quality 
                            of the products used for each and every plate.
                        </p>
                        <p>
                            If it's not perfect and just the way you ordered it, 
                            we won't send it out.
                        </p>
                        <img src={Stage} className="m-5 rounded" id="stage" alt="stage"/>
                        <p>
                            Our menu offers something for everybody, 
                            from light passage of plates of mixed greens and 
                            little nibbles to the inconceivable  T Bone steak. 
                            Our steaks are sliced in house to guarantee flawlessness 
                            and expertly barbecued at 2,000 degrees.
                        </p>
                        <p>
                            We will probably give excellent client benefit, the best quality fixings, 
                            and a noteworthy affair whether it’s an uncommon occasion, 
                            easygoing social event of companions or a sentimental night out on the town.
                        </p>
                    </div>
                    <img src={Header} className="mt-5" id="header-img" alt="header"/>
                </div>
            </Layout>
        </div>
    )
}

export default Story;