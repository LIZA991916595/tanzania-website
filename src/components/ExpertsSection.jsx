import "./ExpertsSection.css";
import visiters from "../assets/images/visiters.png";
import ravi from "../assets/images/ravi.jpg";
export default function ExpertsSection() {
    return (
        <section className="expert-section" id="experts">
            <div className="expert-container">

                {/* LEFT */}
                <div className="expert-left">
                    <span className="expert-tag">
                        <h1>TALK TO SOMEONE WHO'S BEEN THERE</h1>
                    </span>

                    <h2>
                        Our Tanzania specialists know these parks,
                        camps and beaches inside out.
                    </h2>

                    <h3>
                        Real expertise doesn't come from a few trips to Africa.
                        All our specialists have either been guides, run the camps,
                        or grown up and lived in Africa. That's over 600 years of
                        genuine safari experience.
                    </h3>

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
                            src={ravi}
                            alt="Expert"
                        />

                        <div>
                            <h4>Ravi Sahu</h4>
                            <span>Team Leader</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="expert-right">
                    <img
                        src={visiters}
                        alt="Expert"
                    />
                </div>

            </div>
        </section>
    );
}