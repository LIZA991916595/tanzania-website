import React from "react";
import "./ReasonsSection.css";

const reasons = [
    {
        id: 1,
        icon: "🦁",
        title: "World-Class Safaris",
        text: "Explore Serengeti, Ngorongoro and Tarangire with experienced safari guides."
    },
    {
        id: 2,
        icon: "🏖️",
        title: "Beautiful Beaches",
        text: "Relax on Zanzibar's white sand beaches with crystal clear waters."
    },
    {
        id: 3,
        icon: "🏕️",
        title: "Luxury Lodges",
        text: "Stay in carefully selected luxury camps and lodges across Tanzania."
    },
    {
        id: 4,
        icon: "🌍",
        title: "Tailor-Made Trips",
        text: "Every itinerary is customised according to your interests and budget."
    }
];

function ReasonsSection() {
    return (
        <section className="reasons" id="reasons">

            <div className="reasons-heading">

                <span>Reason to Visit Tanzania</span>

                <h2>Why Travel With Us?</h2>

                <p>
                    The serengeti hots the massive heards of the Great Migration throughout most of the year.Depending on what you'd like to see, whethere its the river crossings, rutting season, or claving season, our specialists can advise on where to go and when for the best great migration safari.
                </p>
                <p>Though most assciate the Great Migration with the instense eiver crossings, it is in fact a year round phenomenon. visit the southen Serengeti between January and March for incrediable predator action during calving season and plenty of cheetah sighits. June is a major migratrion month when the heards push north, and july through August is when you're likely to see the first cinemantic scenes of huge herds thundering through croc-infested water, often continuing until october.Whichener month you choose to visit, the Serengeti is a superb national park with wildlife sightings is a superb national park with wildlife sightings second to none.</p>
            </div>

            <div className="reasons-grid">

                {reasons.map((item) => (

                    <div className="reason-card" key={item.id}>

                        <div className="reason-icon">
                            {item.icon}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.text}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default ReasonsSection;