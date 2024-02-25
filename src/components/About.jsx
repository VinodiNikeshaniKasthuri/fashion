import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        VINOO FASHION   is a fashion destination founded on the principle of seamlessly combining style and comfort. Since 2018, we've curated a collection that empowers individuals, offering trend-conscious pieces without compromising on wearability. Our commitment to quality ensures each item withstands the test of time. With a customer-centric approach, we prioritize your satisfaction, providing personalized assistance throughout your shopping journey. Join the VINOO FASHION community for the latest trends and exclusive offers. 
                            </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
