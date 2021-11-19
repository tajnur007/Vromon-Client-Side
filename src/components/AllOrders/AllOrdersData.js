import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AllOrdersData = (props) => {
    const { packageDetails, duration, receiverName, address, status } = props.value;
    const statusRef = useRef();

    // Modal Controls 
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);

    // Handle Order Cancel Method 
    const handleUpdate = () => {
        const url = `https://secret-coast-24933.herokuapp.com/updateOrder`;
        const newOrder = { ...props.value };
        newOrder.status = `${statusRef.current.value}`;

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
                    alert('Update complete!');
                }
            })
    }

    // Handle Order Delete Method 
    const handleDelete = () => {
        const url = `https://secret-coast-24933.herokuapp.com/deleteOrder`;
        const order = { ...props.value };
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    handleDeleteClose();
                }
            })
    }

    return (
        <tr>
            <td>{packageDetails}</td>
            <td>{duration} </td>
            <td>{receiverName} </td>
            <td>{address} </td>
            <td>
                <select ref={statusRef} class="form-select form-select-sm" id="floatingSelectGrid">
                    <option defaultValue> {status} </option>
                    <option value="Processing">Processing</option>
                    <option value="Done">Done</option>
                    <option value="Canceled">Canceled</option>
                </select>
            </td>
            <td>

                {/* Update Button  */}
                <Button variant="success" onClick={handleUpdate} className="me-2">
                    Update
                </Button>

                {/* Delete Button trigger modal  */}
                <Button variant="danger" onClick={handleDeleteShow} className="me-2">
                    Delete
                </Button>

                <Modal
                    show={showDelete}
                    onHide={handleDeleteClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Delete operation will premanently delete this order from database. If you really want to delete this order then click Confirm Delete buton again, else Cancel.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>Confirm Delete</Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    );
};

export default AllOrdersData;