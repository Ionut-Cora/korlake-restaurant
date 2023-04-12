import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Story.css';
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
import StoryImg from '../../utils/img/story-img.jpg';

function Story() {
    return(
        <div>
            <Layout>
                <div id="allstory">
                    <div className="our-story text-light py-5">
                        <div className="container">
                            <h1 className='pt-5 mb-3 text-center text-capitalize'>Our story</h1>

                            <p>Since our modest beginnings in 2011 with a little space in London’s stylish locale, Korlake‘s development has been enlivened with the energy to cook and serve perfect plates. Here at Korlake Restaurant we take pride in the quality of the products used for each and every plate. If it's not perfect and just the way you ordered it, we won't send it out.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat natus ab ut pariatur odit fugiat eveniet soluta magni ipsam facere? Modi deleniti cupiditate architecto unde? Ipsa, veniam rem? Odit dicta delectus nihil reprehenderit consectetur provident laudantium eaque rem distinctio id, suscipit consequuntur qui adipisci libero! Odio necessitatibus dolore amet ipsam architecto, cumque quo veritatis nulla repudiandae deserunt adipisci aspernatur sunt, id sapiente quae doloremque autem mollitia commodi perferendis omnis eos esse culpa temporibus! Neque, officia!</p>

                            <div className='row mt-5'>
                                <div className="col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center">
                                    <img src={StoryImg} alt="story img" />
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                                    <h3 className='mb-3 text-capitalize'>Quality food, great times</h3>
                                    <p className='text-start'>Our menu offers something for everybody, from light passage of plates of mixed greens and little nibbles to the inconceivable  T Bone steak. Our steaks are sliced in house to guarantee flawlessness and expertly barbecued at 2,000 degrees.</p>
                                    <p>We will probably give excellent client benefit, the best quality fixings, and a noteworthy affair whether it’s an uncommon occasion, easygoing social event of companions or a sentimental night out on the town.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic quod atque assumenda aspernatur blanditiis praesentium voluptate reiciendis iure ullam voluptatem repellat maxime, non quos culpa tenetur quidem modi perferendis!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="container py-5">
                        <h4 className='mb-3 text-center text-capitalize'>Let's take a look inside</h4>
                        <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus quibusdam animi facilis, illum vel mollitia odit! Corporis rem mollitia sed. Ex libero ut inventore debitis nulla quia dicta optio?</p>

                        <div className="images-gallery row">
                            <div className="col-12 col-md-4 px-2">
                                <div className='my-3'>
                                    <img src={g6} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g19} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g5} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g13} alt="gallery img" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2">
                                <div className='my-3'>
                                    <img src={g14} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={DessertImage} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g15} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g10} alt="gallery img" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2">
                                <div className='my-3'>
                                    <img src={BreakfastImage} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g17} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g18} alt="gallery img" />
                                </div>
                                <div className='my-3'>
                                    <img src={g16} alt="gallery img" />
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