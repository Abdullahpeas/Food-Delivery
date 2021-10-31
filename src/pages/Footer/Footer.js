import React from 'react';
import './Footer.css';
import logo from '../../../src/logo/favicon.ico';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" width="150px" src={logo} alt="" />
                    </div>

                    <div className="col-md-4">
                        <h4 className="mt-3 fs-3">Connect us</h4>
                        <i className="fab fa-facebook icon-facebook"></i>
                        <i className="fab fa-instagram icon-instagram"></i>
                        <i className="fab fa-twitter icon-twitter"></i>
                    </div>

                    <div className="col-md-4">
                        <h4 className="fs-3 mt-3">Contact Us</h4>
                        <h5>Email</h5>
                        <p>support@gmail.com</p>
                        <h5>Phone</h5>
                        <p>+993462146</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;