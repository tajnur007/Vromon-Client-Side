import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyOrdersData = (props) => {
    const { packageDetails, duration, status } = props.value;

    // Modal Controls 
    const [showCancel, setShowCancel] = useState(false);
    const handleCancleClose = () => setShowCancel(false);
    const handleCancleShow = () => setShowCancel(true);

    // Handle Order Cancel Method 
    const handleCancel = () => {
        const url = `http://localhost:5000/updateOrder`;
        const newOrder = { ...props.value };
        newOrder.status = 'Canceled';

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    handleCancleClose();
                }
            })
    }

    return (
        <tr>
            <td>{packageDetails}</td>
            <td>{duration} </td>
            <td>{status}</td>
            <td>
                {/* Cancel Button trigger modal  */}
                <Button variant="warning" onClick={handleCancleShow} className="me-2">
                    Cancel
                </Button>

                <Modal
                    show={showCancel}
                    onHide={handleCancleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Cancel operation will premanently make this order as a Cancled Order. If you really want to cancel this order then click Confirm Cancel buton again, else Cancel.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancleClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleCancel}>Confirm Cancel</Button>
                    </Modal.Footer>
                </Modal>

            </td>
        </tr>
    );
};

export default MyOrdersData;