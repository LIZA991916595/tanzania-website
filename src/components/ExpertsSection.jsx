import "./ExpertsSection.css";

export default function ExpertsSection() {
    return (
        <section className="expert-section">
            <div className="expert-container">

                {/* LEFT */}
                <div className="expert-left">
                    <span className="expert-tag">
                        TALK TO SOMEONE WHO'S BEEN THERE
                    </span>

                    <h2>
                        Our Tanzania specialists know these parks,
                        camps and beaches inside out.
                    </h2>

                    <p>
                        Real expertise doesn't come from a few trips to Africa.
                        All our specialists have either been guides, run the camps,
                        or grown up and lived in Africa. That's over 600 years of
                        genuine safari experience.
                    </p>

                    <div className="expert-buttons">
                        <button className="enquiry-btn">
                            Make an Enquiry
                        </button>

                        <a
                            href="tel:+917853842449"
                            className="call-btn"
                        >
                            📞 7853842449
                        </a>
                    </div>

                    <div className="expert-profile">
                        <img
                            src="/images/expert1.jpg"
                            alt="Expert"
                        />

                        <div>
                            <h4>LAUREN NOAKES</h4>
                            <span>Team Leader</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="expert-right">
                    <img
                        src="/images/expert-banner.jpg"
                        alt="Expert"
                    />
                </div>

            </div>
        </section>
    );
}