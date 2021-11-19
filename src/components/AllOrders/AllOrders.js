import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AllOrdersData from './AllOrdersData';

const AllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://secret-coast-24933.herokuapp.com/orders?email=${user.email}`)
            .then(resp => resp.json())
            .then(data => setOrders(data))

    }, [user.email]);

    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MANAGE ALL ORDERS</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Package Details</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Receiver</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <AllOrdersData key={order._id} value={order} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;