import React, { useState } from 'react';

const BiddingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        place: '',
        bidPrice: '',
        finalPrice: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="container mt-5">
            <h2>Bidding Form</h2>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

               
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

               
                <div className="mb-3">
                    <label htmlFor="place" className="form-label">Place</label>
                    <input
                        type="text"
                        className="form-control"
                        id="place"
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        placeholder="Enter your location"
                        required
                    />
                </div>

               
                <div className="mb-3">
                    <label htmlFor="bidPrice" className="form-label">Bid Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="bidPrice"
                        name="bidPrice"
                        value={formData.bidPrice}
                        onChange={handleChange}
                        placeholder="Enter your bid price"
                        required
                    />
                </div>

              
                <div className="mb-3">
                    <label htmlFor="finalPrice" className="form-label">Final Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="finalPrice"
                        name="finalPrice"
                        value={formData.finalPrice}
                        onChange={handleChange}
                        placeholder="Enter the final price"
                        required
                    />
                </div>

                
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        required
                    ></textarea>
                </div>

               
                <button type="submit" className="btn btn-primary">Submit Bid</button>
            </form>
        </div>
    );
};

export default BiddingForm;
