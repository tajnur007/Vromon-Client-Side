import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import companyImage from '../../resources/images/vromon-xl.png';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="pt-5 bg-dark">
                <div className="container">
                    <div className="mx-5 my-5 newsletter">
                        <h1 className="fw-bold text-light py-5">Subscribe To Our Newsletter For Latest Update</h1>
                        <InputGroup className="pb-5 px-5">
                            <FormControl placeholder="Enter your email" />
                            <Button variant="info">
                                SUBSCRIBE
                            </Button>
                        </InputGroup>
                    </div>

                    <div className="row">
                        {/* First Section  */}
                        <div className="col-sm-12 col-md-12 col-lg-4 text-start">
                            {/* Company Logo with Name  */}
                            <div>
                                <img className="pb-3 px-5 img-fluid" src={companyImage} alt="" />
                            </div>

                            {/* Short Description  */}
                            <p className="text-muted">VROMON is one of the best travel agency in Bangladesh. Visit "About Us" page to know more about VROMON. </p>


                        </div>

                        {/* Second Section  */}
                        <div className="col-sm-6 col-md-4 col-lg-2 text-start">
                            <h5 className="text-light">Company</h5>
                            <Link to="/" className="footer-links">Home</Link> <br />
                            <Link to="/" className="footer-links">About Us</Link> <br />
                            <Link to="/" className="footer-links">Community Blog</Link> <br />
                            <Link to="/" className="footer-links">Rewards</Link> <br />
                            <Link to="/" className="footer-links">Meet the Team</Link> <br />
                            <Link to="/contacts" className="footer-links">Contact Us</Link> <br />
                            <Link to="/" className="footer-links">Privacy Policy</Link> <br />
                        </div>

                        {/* Third Section  */}
                        <div className="col-sm-6 col-md-4 col-lg-3 text-start">
                            <h5 className="text-light">Links</h5>
                            <Link to="/" className="footer-links">Destinations</Link> <br />
                            <Link to="/" className="footer-links">Tours</Link> <br />
                            <Link to="/" className="footer-links">Gallery</Link> <br />
                            <Link to="/" className="footer-links">FAQ's</Link> <br />
                            <Link to="/" className="footer-links">Hotels</Link> <br />
                            <Link to="/" className="footer-links">Work with Us</Link> <br />
                        </div>

                        {/* Fourth Section  */}
                        <div className="col-sm-12 col-md-4 col-lg-3 text-start">
                            <h5 className="text-light">Contact Us</h5>

                            <p className="text-muted"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-app-primary" /> 343, BIDC Bazar, DUET, Gazipur, Bangladesh.</p>

                            <p className="text-muted"><FontAwesomeIcon icon={faPhoneAlt} className="text-app-primary" /> 01721-919296</p>

                            <p className="text-muted"><FontAwesomeIcon icon={faEnvelope} className="text-app-primary" /> info@vromon.com.bd</p>

                            {/* Social Icons  */}
                            <div>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                </Link>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                                </Link>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                                </Link>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Separate Line  */}
                    <div className="separate-line my-4"></div>

                    {/* Footer Lower Section  */}
                    <div className="pb-5 text-muted">
                        Copyright @ 2021, VROMON. All rights reserved. <br />
                        Developed By: KAZI TAJNUR ISLAM
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;