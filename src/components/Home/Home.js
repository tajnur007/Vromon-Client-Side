import React, { useEffect, useState } from 'react';
import './Home.css';
import { Carousel, Row } from 'react-bootstrap';
import banner1 from '../../resources/images/banner-1.png';
import banner2 from '../../resources/images/banner-2.png';
import banner3 from '../../resources/images/banner-3.png';
import Package from '../Package/Package';
import Destination from '../Destination/Destination';

const Home = () => {
    const [packages, setPackages] = useState([]);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://secret-coast-24933.herokuapp.com/packages')
            .then(resp => resp.json())
            .then(data => setPackages(data));

        fetch('https://secret-coast-24933.herokuapp.com/destinations')
            .then(resp => resp.json())
            .then(data => setDestinations(data));
    }, [])

    return (
        <div>
            {/* Carousel Banner  */}
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

            {/* Package Section  */}
            <div className="container my-5">
                <h1 className="my-5">Select Your Best Package <br /> For Your Travel</h1>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        packages.map(data => <Package key={data.key} value={data}></Package>)
                    }
                </Row>
            </div>

            {/* Package Section  */}
            <div className="container pt-5 my-5">
                <h1 className="my-5">Select Our Best Popular <br /> Destinations</h1>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        destinations.map(data => <Destination key={data.key} value={data}></Destination>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;