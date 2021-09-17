import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Story.css';
import Stage from '../../utils/img/stage.jpg';
import g1 from '../../utils/img/g1.jpg';
import g2 from '../../utils/img/g2.jpg';
import g3 from '../../utils/img/g3.jpg';
import g4 from '../../utils/img/g4.jpg';
import g5 from '../../utils/img/g5.jpg';
import g6 from '../../utils/img/g6.jpg';
import g7 from '../../utils/img/g7.jpg';
import g8 from '../../utils/img/g8.jpg';
import g9 from '../../utils/img/g9.jpg';
import g10 from '../../utils/img/g10.jpg';
import g11 from '../../utils/img/g11.jpg';
import g12 from '../../utils/img/g12.jpg';

function Story() {
    return(
        <div>
            <Layout>
                <div id="allstory">
                    <h1 className="m-5">Story</h1>
                    <h3>Quality food, great times</h3>
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
                        <img src={Stage} id="stage" alt="stage"/>
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
                    <div id="food">
                        <img src={g1} alt="beef"/>
                        <img src={g2} alt="chocolate"/>
                        <img src={g3} alt="veggies"/>
                        <img src={g4} alt="beef"/>
                        <img src={g5} alt="chocolate"/>
                        <img src={g6} alt="veggies"/>
                        <img src={g7} alt="beef"/>
                        <img src={g8} alt="chocolate"/>
                        <img src={g9} alt="veggies"/>
                        <img src={g10} alt="beef"/>
                        <img src={g11} alt="chocolate"/>
                        <img src={g12} alt="veggies"/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Story;