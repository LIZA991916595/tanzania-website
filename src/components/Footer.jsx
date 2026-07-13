import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="footeer">

            <div className="footer-top">

                <div className="footer-left">

                    <h2>Tanzania Safaris</h2>
                    <p className="footer-text">
                        Discover unforgettable Tanzania safaris, luxury lodges,
                        wildlife adventures and tailor-made holidays across East Africa.
                    </p>

                    <div className="social-icons">
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                    <div className="footer-language">
                        <span>🇬🇧 English ▼</span>
                    </div>

                    <div className="trustpilot">
                        <h4>Excellent</h4>
                        <p>★★★★★</p>
                        <small>Based on 1,586 reviews</small>
                    </div>
                </div>

                <div className="footer-links">

                    <ul>
                        <li>Destinations</li>
                        <li>Trips</li>
                        <li>When to Go</li>
                        <li>Your First Safari?</li>
                        <li>FAQs</li>
                        <li>Find Us</li>
                        <li>About Us</li>
                    </ul>

                </div>

                <div className="footer-links">

                    <ul>
                        <li>General Information</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>

                </div>

                <div className="newsletter">

                    <h2>Sign up to our Newsletter</h2>
                    <div className="footer-form">
                        <input type="text" placeholder="First Name" />

                        <input type="text" placeholder="Last Name" />

                        <input type="email" placeholder="Email" />
                        <select>
                            <option>Region*</option>
                            <option>India</option>
                            <option>Africa</option>
                            <option>Europe</option>
                        </select>
                    </div>

                    <p className="privacy">
                        Your personal details are protected.
                    </p>

                    <button>Sign Up</button>



                </div>
            </div>
            <div className="footer-bottom">

                <p>
                    © 2026 Tanzania Safaris. All Rights Reserved.
                </p>
                <div className="footer-bottom-links">
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                    <span>Cookie Policy</span>
                </div>

            </div>

        </footer>
    );
}

export default Footer;