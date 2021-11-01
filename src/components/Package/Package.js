import React from 'react';
import './Package.css';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = (props) => {
    const { _id, name, price, rating, image, duration } = props.value;
    const history = useHistory();

    // Handle View Package Details Button Click 
    const viewServiceDetails = (id) => {
        history.push(`/packages/${id}`);
    }

    return (
        <Col>
            <Card className="simple-animation">
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={image} className="pb-3" />
                </div>
                <Card.Body>
                    <Card.Text className="text-app-green d-flex justify-content-between flex-wrap">
                        <div> {price}/Person </div>
                        <div> {duration} </div>
                    </Card.Text>
                    <Card.Title className="text-app-primary">{name}</Card.Title>
                    <Card.Text>
                        Rating: <span className="text-app-primary fw-bold">{rating}</span>
                    </Card.Text>
                    <button onClick={() => viewServiceDetails(_id)} className="custom-btn">View Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;