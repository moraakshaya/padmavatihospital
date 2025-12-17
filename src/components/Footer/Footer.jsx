import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import "./Footer.css";

function Footer() {
    return (
        <footer className="pmc-footer">
            <div className="footer-container">

                {/* -------- COLUMN 1 -------- */}
                <div className="footer-col">
                    
                    <Link to="/"><img
                        src="/logo.png"
                        alt="Padmavati Medical Center"
                        className="footer-logo"
                    /></Link>

                    <p className="footer-address">
                        Plot No. 12-13-60, Main Road, Tarnaka &
                        <br />Plot No. 12-13-67/2, Sadhashiv Nagar, Lane Adj. to Sanman Hotel, Street No. 5, Tarnaka, Secunderabad
                        <br /> 500017
                    </p>

                    <h4 className="footer-heading">Follow Us</h4>

                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* -------- COLUMN 2 -------- */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>

                    <ul className="footer-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/insurance">Insurance</Link></li>
                    </ul>

                </div>

                {/* -------- COLUMN 3 -------- */}
                <div className="footer-col">
                    <h4 className="footer-heading">Departments</h4>

                    <ul className="footer-links dept-list">
                        <li><Link to="/departments/cardiology">Cardiology</Link></li>
                        <li><Link to="/departments/general-medicine">General Medicine</Link></li>
                        <li><Link to="/departments/diabetology">Diabetology</Link></li>
                        <li><Link to="/departments/gastroenterology">Gastroenterology</Link></li>
                        <li><Link to="/departments/pediatrics">Pediatrics</Link></li>
                        <li><Link to="/departments/neurology">Neurology</Link></li>
                        <li><Link to="/departments/pulmonology">Pulmonology</Link></li>
                        <li><Link to="/departments/orthopedics">Orthopedics</Link></li>
                        <li><Link to="/departments/nephrology">Nephrology</Link></li>
                        <li><Link to="/departments/general-surgery">General Surgery</Link></li>
                        <li><Link to="/departments/anesthesiology">Anesthesiology</Link></li>
                        <li><Link to="/departments/pathology">Pathology</Link></li>
                        <li><Link to="/departments/urology">Urology</Link></li>
                        <li><Link to="/departments/dermatology">Dermatology</Link></li>
                        <li><Link to="/departments/physiotherapy">Physiotherapy</Link></li>
                    </ul>

                </div>

                {/* -------- COLUMN 4 -------- */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact Us</h4>

                    <div className="footer-row">
                        <FaEnvelope className="footer-icon" />
                        <p>padmavatimedicalcenter2010@gmail.com</p>
                    </div>

                    <div className="footer-row">
                        <FiPhoneCall className="footer-icon" />
                        <p>040-27007111</p>
                    </div>

                    <div className="footer-row">
                        <FaPhone className="footer-icon" />
                        <p>+91 9160668686</p>
                    </div>

                    <div className="footer-row">
                        <FaPhone className="footer-icon" />
                        <p>+91 9866635947</p>
                    </div>

                    <h4 className="footer-heading legal-title">Legal</h4>

                    <div className="footer-row">
                        <div className="vertical-line"></div>
                        <Link to="/terms-&-conditions">Terms & Conditions</Link>
                    </div>

                    <div className="footer-row">
                        <div className="vertical-line"></div>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>

                </div>
            </div>

            {/* -------- BOTTOM BAR -------- */}
            <div className="footer-bottom">
                <p>
                    Developed by <strong>@Prodbiz Solutions Private Limited</strong>
                </p>
                <span className="v-divider"></span>
                <p>&copy; {new Date().getFullYear()} Padmavati Medical Center</p>
            </div>
        </footer>
    );
}

export default Footer;
