import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Package from '../Package/Package';

const SortedPackages = () => {
    const [packages, setPackages] = useState([]);
    const [sortedPackages, setSortedPackages] = useState([]);
    const { keywords } = useParams();

    useEffect(() => {
        fetch('https://secret-coast-24933.herokuapp.com/packages')
            .then(resp => resp.json())
            .then(data => setPackages(data));

        const sortedData = packages.filter(data => data.name.toLowerCase().includes(keywords));
        setSortedPackages(sortedData);
    }, [packages, keywords])

    return (
        <div className="container my-5">
            <h1 className="my-5">We Have Found Following Packages <br /> For Your Travel In <span className="text-app-primary fw-bold"> {keywords.toUpperCase()} </span> </h1>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    sortedPackages.map(data => <Package key={data.key} value={data}></Package>)
                }
            </Row>
        </div>
    );
};

export default SortedPackages;