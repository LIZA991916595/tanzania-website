import React from "react";
import "./TripsSection.css";

const trips = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=900",
        title: "Classic Tanzania Safari",
        duration: "7 Days",
        price: "From $2,850",
        description:
            "Explore Serengeti, Ngorongoro Crater and Tarangire National Park on this unforgettable safari."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
        title: "Luxury Serengeti Safari",
        duration: "10 Days",
        price: "From $5,200",
        description:
            "Stay in luxury lodges while enjoying exceptional wildlife viewing in Tanzania's famous parks."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
        title: "Safari & Zanzibar",
        duration: "12 Days",
        price: "From $4,950",
        description:
            "Combine thrilling game drives with relaxing white-sand beaches in beautiful Zanzibar."
    }
];

function TripsSection() {
    return (
        <section className="trips">

            <div className="trips-header">

                <span>POPULAR TOURS</span>

                <h2>Tanzania Trips</h2>

                <p><h3>
                    <b>If there is one park everyone should visit then it just has to be the Serengeti .Go off piste in Tanzania, however, and you'll find quite parks away from the crowds. this is a wonderfully diverse country that's absolutely packed with wildlife.</b>
                </h3>

                </p>

            </div>

            <div className="trip-grid">

                {trips.map((trip) => (

                    <div className="trip-card" key={trip.id}>

                        <img src={trip.image} alt={trip.title} />

                        <div className="trip-content">

                            <div className="trip-info">

                                <span>{trip.duration}</span>

                                <span>{trip.price}</span>

                            </div>

                            <h3>{trip.title}</h3>

                            <p>{trip.description}</p>

                            <button>View Trip</button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default TripsSection;