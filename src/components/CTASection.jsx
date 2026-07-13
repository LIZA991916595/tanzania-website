import React from "react";
import "./CTASection.css";

function CTASection() {
    return (
        <section className="cta" id="CTA">

            <div className="cta-container">

                <div className="cta-left">

                    <span className="cta-subtitle">
                        START PLANNING YOUR JOURNEY
                    </span>

                    <h2>Speak to an Expert</h2>

                    <p>
                        Let one of our Tanzania experts design your tailor-made African adventure.
                    </p>

                </div>

                <div className="cta-right">
                    <button className="cta-btn">
                        Make an Enquiry
                    </button>
                </div>

            </div>

        </section>
    );
}

export default CTASection;