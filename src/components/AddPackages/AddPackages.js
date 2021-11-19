import React, { useRef } from 'react';
import './AddPackages.css';
import useAuth from '../../hooks/useAuth';

const AddPackages = () => {
    const { user } = useAuth();

    const formRef = useRef();
    const keyRef = useRef();
    const nameRef = useRef();
    const durationRef = useRef();
    const priceRef = useRef();
    const ratingRef = useRef();
    const imageRef = useRef();

    // Handle Add Product 
    const handleAddProduct = e => {
        e.preventDefault();
        const key = keyRef.current.value;
        const name = nameRef.current.value;
        const duration = durationRef.current.value;
        const price = priceRef.current.value;
        const rating = ratingRef.current.value;
        const image = imageRef.current.value;

        // Sending Product Info to Database 
        const newPackage = { key, name, duration, price, rating, image };

        fetch(`https://secret-coast-24933.herokuapp.com/addPackage?email=${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package successfully added.');
                    formRef.current.reset();
                }
            })
    }


    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">ADD A PACKAGE</h1>

            <form ref={formRef}>
                {/* All Input Fields  */}
                <div className="d-flex flex-wrap mb-3">
                    {/* Package keyRef */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={keyRef} />
                        <label htmlFor="floatingInput">Package Key</label>
                    </div>

                    {/* Package Name */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={nameRef} />
                        <label htmlFor="floatingInput">Package Name</label>
                    </div>

                    {/* Package Name */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={durationRef} />
                        <label htmlFor="floatingInput">Duration</label>
                    </div>

                    {/* Package Price */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="number" className="form-control w-98" id="floatingInput" placeholder=" " ref={priceRef} />
                        <label htmlFor="floatingInput">Price</label>
                    </div>

                    {/* Package Price */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="number" className="form-control w-98" id="floatingInput" placeholder=" " ref={ratingRef} />
                        <label htmlFor="floatingInput">Rating</label>
                    </div>

                    {/* Package Price */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={imageRef} />
                        <label htmlFor="floatingInput">Image Link</label>
                    </div>

                </div>

                {/* Submit Button  */}
                <div>
                    <button onClick={handleAddProduct} type="submit" className="btn btn-success py-2">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddPackages;