import React from 'react';
import './Destination.css';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Destination = (props) => {
    const { name, image } = props.value;
    const history = useHistory();

    // Handle View Destination Details Button Click 
    const viewDestinationDetails = (id) => {
        history.push(`/packages/${id}`);
    }


    return (
        <Col>
            <Card onClick={() => viewDestinationDetails(name.toLowerCase())} className="simple-animation cursor">
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={image} className="pb-3" />
                </div>
                <Card.Body>
                    <Card.Title className="text-app-primary fw-bold">{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Destination;