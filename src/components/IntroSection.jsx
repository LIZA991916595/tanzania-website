import React from "react";
import "./IntroSection.css";

function IntroSection() {
    return (
        <section className="intro" id="intro">

            {/* Top Content */}
            <div className="intro-top">

                <span className="intro-subtitle">
                    TANZANIA SAFARI HOLIDAYS
                </span>

                <h2>
                    Home to Africa's Most Famous Safari Destinations &
                    Unforgettable Wildlife Experiences
                </h2>

                <p>
                    Renowned for the Great Migration, the Serengeti's endless plains and
                    the iconic Mount Kilimanjaro, Tanzania delivers some of Africa's most
                    legendary safari experiences, paired with idyllic Indian Ocean
                    beaches for the ultimate bush-and-beach escape.
                </p>

            </div>

            {/* Bottom Section */}
            <div className="intro-bottom">

                {/* Left Image */}
                <div className="intro-image">
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&auto=format&fit=crop&q=80"
                        alt="Tanzania Safari"
                    />
                </div>

                {/* Right Content */}
                <div className="visit-content">

                    <span className="visit-subtitle">
                        BEST MONTH TO GO
                    </span>

                    <h2>When to Visit Tanzania</h2>

                    <ul>
                        <li>
                            Tanzania offers unforgettable safari adventures year-round, but
                            the timing of your visit can shape whether you catch epic wildlife
                            spectacles or serene crowd-free landscapes.
                        </li>

                        <li>
                            The best time for wildlife safaris is the dry season from June to
                            October. The peak of the Great Migration typically takes place
                            between July and September in the Serengeti.
                        </li>

                        <li>
                            The green season runs from November to May with lush landscapes,
                            fewer crowds and excellent birdwatching, though some roads and
                            parks may be less accessible.
                        </li>

                        <li>
                            The long rains are from mid-March to May and the short rains run
                            from November to mid-January.
                        </li>
                    </ul>

                    <button className="visit-btn">
                        When to Visit Tanzania
                    </button>

                </div>

            </div>

        </section>
    );
}

export default IntroSection;