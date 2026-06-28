import React from "react";
import "./ExploreSection.css";

const destinations = [
    {
        name: "Serengeti",
        image:
            "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=500",
        description: "Witness the Great Migration and Africa's iconic wildlife."
    },
    {
        name: "Ngorongoro",
        image:
            "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=500",
        description: "Home to the world's largest intact volcanic caldera."
    },
    {
        name: "Tarangire",
        image:
            "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500",
        description: "Famous for giant baobabs and large elephant herds."
    },
    {
        name: "Zanzibar",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
        description: "White sand beaches and crystal-clear Indian Ocean."
    }
];

function ExploreSection() {
    return (
        <section className="explore">

            <div className="explore-heading">

                <span>EXPLORE TANZANIA</span>

                <h2>Discover Tanzania's Top Destinations</h2>

                <button>All Parks</button>
                <button>All Accommodation</button>
            </div>

            <div className="map-wrapper">
                <div className="map-left">

                    <img
                        src="/images/map.png"
                        alt="Tanzania Map"
                    />

                    <div className="marker marker1"></div>
                    <div className="marker marker2"></div>
                    <div className="marker marker3"></div>
                    <div className="marker marker4"></div>

                </div>

                <div className="map-right">

                    {destinations.map((item, index) => (

                        <div className="destination-card" key={index}>

                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <div className="destination-content">

                                <h3>{item.name}</h3>

                                <p>{item.description}</p>

                                <button>Explore →</button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ExploreSection;