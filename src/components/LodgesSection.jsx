import React from "react";
import "./LodgesSection.css";

const lodges = [
    {
        id: 1,
        title: "Serengeti Green Camp",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
        location: "Serengeti National Park",
        description:
            "Wayo Serengeti Green Camp is one the best value bush camps we've visited anywhere in east Africa. Based at two excellent locations well away..."
    },
    {
        id: 2,
        title: "Lamai Serengeti",
        image:
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900",
        location: "Ngorongoro Conservation Area",
        description:
            "Lamai Serengeti occupies an enviable site in the northen Serengeti merely a few kilometers from the Mara river. where the thunderous spectacle of..."
    },
    {
        id: 3,
        title: "Wilderness Usawa Serengeti",
        image:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=900",
        location: "Tarangire National Park",
        description:
            "Wilderness usawa serengeti offers a superb mobile tented camp experience, with access to 15,000 squre kilometers pure serengrti wildness...."
    },
    {
        id: 4,
        title: "Ikuka Safari Camp",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",
        location: "Zanzibar",
        description:
            "Ikuka Safari camp is an upscale yet beautifuly understant property in Tanzanias ruaha natior park,run by safari experts and hands on owerns..."
    }
];

function LodgesSection() {
    return (
        <section className="lodges">

            <div className="lodges-heading">

                <h1><span>Tanzania Lodges</span></h1>

                <h1>Tanzania Lodges</h1>

                <p>
                    Carefully selected luxury lodges and safari camps across Tanzania.
                </p>

            </div>

            <div className="lodges-grid">

                {lodges.map((lodge) => (

                    <div className="lodge-card" key={lodge.id}>

                        <img src={lodge.image} alt={lodge.title} />

                        <div className="lodge-content">

                            <h3>{lodge.title}</h3>

                            <h5>{lodge.location}</h5>

                            <p>{lodge.description}</p>

                            <button>View Lodge</button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default LodgesSection;