import React from "react";
import "./VisitSection.css";

function VisitSection() {
    return (
        <section className="visit" id="visit">

            <div className="visit-container">

                <div className="visit-image">

                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200"
                        alt="Tanzania Safari"
                    />

                </div>

                <div className="visit-content">

                    <span>BEST TIME TO VISIT</span>

                    <h2>When Should You Visit Tanzania?</h2>

                    <p>
                        Tanzania is a fantastic destination throughout the year. The dry
                        season from June to October offers excellent wildlife viewing,
                        while the green season provides fewer crowds, lush landscapes and
                        incredible birdlife.
                    </p>

                    <div className="season">

                        <h4>June – October</h4>

                        <p>
                            Perfect for safaris, the Great Migration and wildlife
                            photography.
                        </p>

                    </div>

                    <div className="season">

                        <h4>November – March</h4>

                        <p>
                            Ideal for birdwatching, calving season and pleasant beach
                            holidays in Zanzibar.
                        </p>

                    </div>

                    <button>Plan Your Trip</button>

                </div>

            </div>

        </section>
    );
}

export default VisitSection;