import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-about">

                    <h2>Tanzania Safaris</h2>

                    <p>
                        Discover unforgettable Tanzania safaris, luxury lodges,
                        wildlife adventures and tailor-made holidays with our
                        Africa travel experts.
                    </p>

                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                    </div>

                </div>

                <div className="footer-links">

                    <h3>Destinations</h3>

                    <ul>
                        <li>Serengeti</li>
                        <li>Ngorongoro</li>
                        <li>Tarangire</li>
                        <li>Zanzibar</li>
                        <li>Ruaha</li>
                    </ul>

                </div>

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <ul>
                        <li>Home</li>
                        <li>Safaris</li>
                        <li>Lodges</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>

                </div>

                <div className="footer-contact">

                    <h3>Contact</h3>

                    <p>📍Bhubaneswr, Odisha</p>
                    <p>📞 +91 7853842449</p>
                    <p>✉ srbjyotirmayee999@gmail.com</p>

                    <button>Plan My Safari</button>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Tanzania Safaris. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;