import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BookingConfirmation = () => {
    const { user } = useAuth();
    const { packageID } = useParams();
    const [packageInfo, setPackageInfo] = useState({});
    const history = useHistory();

    const packageDetailsRef = useRef();
    const mobileRef = useRef();
    const addressRef = useRef();

    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageID}`)
            .then(resp => resp.json())
            .then(data => setPackageInfo(data))

    }, [packageID]);

    useEffect(() => {
        setSubTotal(parseInt(packageInfo.price));
        setShipping(10);
        setTax(parseInt(packageInfo.price) * 0.05);
        setGrandTotal(subTotal + shipping + tax);
    }, [packageInfo.price, subTotal, shipping, tax]);

    // Sending Order Info to Database 
    const handleCheckout = () => {
        const newOrder = {
            packageID: `${packageID}`,
            packageDetails: `${packageDetailsRef.current.value}`,
            receiverEmail: `${user.email}`,
            receiverName: `${user.displayName}`,
            mobile: `${mobileRef.current.value}`,
            address: `${addressRef.current.value}`,
            status: 'Pending'
        };

        fetch(`http://localhost:5000/addOrder`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product successfully added.');
                    history.push('/myOrders');
                }
            })
    }

    return (
        <div className="container my-5">
            <h1 className="txt-primary mb-3">BOOKING CART</h1>
            <div className="d-flex">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 px-4">
                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" ref={packageDetailsRef} className="form-control" id="floatingInput" placeholder=" " value={`${packageInfo.name}, ${packageInfo.duration}`} readOnly />
                        <label htmlFor="floatingInput">Package Details</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="email" className="form-control" id="floatingInput" placeholder=" " value={user.email} readOnly />
                        <label htmlFor="floatingInput">Receiver Email</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" id="floatingInput" placeholder=" " value={user.displayName} readOnly />
                        <label htmlFor="floatingInput">Receiver Name</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" ref={mobileRef} className="form-control" id="floatingInput" placeholder=" " />
                        <label htmlFor="floatingInput">Mobile</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <textarea ref={addressRef} className="form-control" placeholder=" " id="floatingTextarea2" style={{ height: "130px" }}></textarea>
                        <label for="floatingTextarea2">Address</label>
                    </div>

                </div>

                {/* Cart - Price Calculation  */}
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-3 px-4 shadow">
                    <h4>Billing Details</h4>
                    <div className="border-bottom my-3"></div>
                    <div className="d-flex justify-content-between">
                        <p>Subtotal: </p>
                        <p>${subTotal} </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping Charge: </p>
                        <p>${shipping}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Tax: </p>
                        <p>${tax} </p>
                    </div>
                    <div className="border-bottom my-3"></div>
                    <div className="d-flex justify-content-between fw-bold">
                        <p>Grand Total: </p>
                        <p>${grandTotal} </p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleCheckout} className="btn btn-success">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;