import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://secret-coast-24933.herokuapp.com/packages')
            .then(resp => resp.json())
            .then(data => setPackages(data));
    }, [])

    return (
        <div className="container my-5">
            <h1 className="my-5">Select Your Best Package <br /> For Your Travel</h1>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    packages.map(data => <Package key={data.key} value={data}></Package>)
                }
            </Row>
        </div>
    );
};

export default Packages;