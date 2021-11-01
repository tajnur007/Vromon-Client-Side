import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://secret-coast-24933.herokuapp.com/destinations')
            .then(resp => resp.json())
            .then(data => setDestinations(data));
    }, [])

    return (
        <div className="container my-5">
            <h1 className="my-5">Select Our Best Popular <br /> Destinations</h1>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    destinations.map(data => <Destination key={data.key} value={data}></Destination>)
                }
            </Row>
        </div>
    );
};

export default Destinations;