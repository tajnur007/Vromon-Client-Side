import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../resources/images/banner-1.png';
import banner2 from '../../resources/images/banner-2.png';
import banner3 from '../../resources/images/banner-3.png';

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <div className="dark-shade">
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt=""
                        />
                    </div>
                    <Carousel.Caption>
                        <h1>Amazing Tour In Hampshire</h1>
                        <h3 className="text-info">7 Days, 8 Night Tour</h3>
                        <button className="custom-btn">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="dark-shade">
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt=""
                        />
                    </div>

                    <Carousel.Caption>
                        <h1>Amazing Tour In Indonesia</h1>
                        <h3 className="text-info">4 Days, 5 Night Tour</h3>
                        <button className="custom-btn">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="dark-shade">
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt=""
                        />
                    </div>

                    <Carousel.Caption>
                        <h1>Amazing Tour In Madagascar</h1>
                        <h3 className="text-info">6 Days, 7 Night Tour</h3>
                        <button className="custom-btn">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;