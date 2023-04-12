import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Story.css';
import Stage from '../../utils/img/stage.jpg';
import g5 from '../../utils/img/g5.jpg';
import g6 from '../../utils/img/g6.jpg';
import g10 from '../../utils/img/g10.jpg';
import g13 from '../../utils/img/g13.jpg';
import g14 from '../../utils/img/g14.jpg';
import g15 from '../../utils/img/g15.jpg';
import g16 from '../../utils/img/g16.jpg';
import g17 from '../../utils/img/g17.jpg';
import g18 from '../../utils/img/g18.jpg';
import g19 from '../../utils/img/g19.jpg';
import BreakfastImage from '../../utils/img/breakfast-img.jpg';
import DessertImage from '../../utils/img/dessert-img.jpg';

function Story() {
    return(
        <div>
            <Layout>
                <div id="allstory">
                    <h1>Story</h1>
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
                    

                    <div className="container py-5">
                        <h4>Let's take a look inside</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus quibusdam animi facilis, illum vel mollitia odit! Corporis rem mollitia sed. Ex libero ut inventore debitis nulla quia dicta optio?</p>

                        <div className="images-gallery row">
                            <div className="col-12 col-md-4 px-2">
                                <div className='my-3'>
                                    <img src={g6} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g19} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g5} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g13} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2">
                                <div className='my-3'>
                                    <img src={g14} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={DessertImage} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g15} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g10} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2">
                                <div className='my-3'>
                                    <img src={BreakfastImage} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g17} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g18} alt="" />
                                </div>
                                <div className='my-3'>
                                    <img src={g16} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Story;