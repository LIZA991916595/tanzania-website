import React, { useState } from "react";
import "./TripsSection.css";

const trips = [
    {
        id: 1,
        image: "https://thumbs.dreamstime.com/z/beautiful-girl-group-tourists-jungle-near-mondica-camp-borderland-congo-central-african-rep-63033976.jpg",
        title: "Tanzania and Kenya",
        nights: "7 nights",
        price: "From £4,995 – £11,866 pp",
    },
    {
        id: 2,
        image: "https://plus.unsplash.com/premium_photo-1730233719882-890f7043eb9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFndWFyfGVufDB8fDB8fHww",
        title: "A Safari Exploration",
        nights: "22 nights",
        price: "From £29,105 pp",
    },
    {
        id: 3,
        image: "https://cms.thefollowup.in/cdn/uploads/articles/1657737023_14nblttelephant_4.jpg",
        title: "Tanzania’s Elephant and Great Migration",
        nights: "9 nights",
        price: "From £9,974 – £10,940 pp",
    },
    {
        id: 4,
        image: "https://staticimg.amarujala.com/assets/images/2020/06/23/lions_1592900394.jpeg?w=750",
        title: "Northern Tanzania and Zanzibar Adventure",
        nights: "12 nights",
        price: "From £6,020 – £8,663 pp",
    },
    {
        id: 5,
        image: "https://www.shutterstock.com/image-photo/ranthambore-national-park-rajasthan-india-260nw-2457581013.jpg",
        title: "Luxury Tanzania Safari",
        nights: "12 nights",
        price: "From £8,484 pp",
    },
];

function TripsSection() {
    const [active, setActive] = useState(2);

    const nextSlide = () => {
        setActive((prev) => (prev + 1) % trips.length);
    };

    const prevSlide = () => {
        setActive((prev) => (prev - 1 + trips.length) % trips.length);
    };

    return (
        <section className="trips" id="trips">

            <div className="trips-header">

                <span>TANZANIA SAFARIS</span>

                <h2>Tanzania Trips</h2>

                <button className="all-trip-btn">
                    All Tanzania trips
                </button>

            </div>

            <div className="trips-wrapper">

                <button className="slider-arrow left" onClick={prevSlide}>
                    ←
                </button>

                <div className="trip-list">

                    {trips.map((trip, index) => (

                        <div
                            key={trip.id}
                            className={
                                index === active
                                    ? "trip-card active"
                                    : "trip-card"
                            }
                        >

                            <div className="trip-image">

                                <img
                                    src={trip.image}
                                    alt={trip.title}
                                />

                                <button className="heart-btn">
                                    ♡
                                </button>

                            </div>

                            <div className="trip-details">

                                <h3>{trip.title}</h3>

                                <p className="trip-meta">
                                    Tanzania • {trip.nights}
                                </p>

                                <h4>{trip.price}</h4>

                            </div>

                        </div>

                    ))}

                </div>

                <button className="slider-arrow right" onClick={nextSlide}>
                    →
                </button>

            </div>
            <div className="trips-bottom-shape"></div>
        </section>
    );
}

export default TripsSection;