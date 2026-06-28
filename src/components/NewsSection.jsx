import React from "react";
import "./NewsSection.css";

const news = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900",
        title: "Witness the Great Migration in Tanzania",
        date: "12 March 2026",
        description:
            "Experience one of nature's greatest spectacles as millions of wildebeest and zebras cross the Serengeti."
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
        title: "Top 10 Luxury Safari Lodges",
        date: "20 March 2026",
        description:
            "Discover our hand-picked collection of Tanzania's finest luxury safari camps and lodges."
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
        title: "Why Zanzibar is the Perfect Beach Escape",
        date: "28 March 2026",
        description:
            "Relax on white sand beaches, explore Stone Town and enjoy unforgettable sunsets."
    }
];

function NewsSection() {
    return (
        <section className="news">

            <div className="news-heading">

                <span>LATEST ARTICLES</span>

                <h2>Travel Inspiration & News</h2>

                <p>
                    Discover travel tips, safari guides and the latest stories from
                    Tanzania.
                </p>

            </div>

            <div className="news-grid">

                {news.map((item) => (

                    <div className="news-card" key={item.id}>

                        <img src={item.image} alt={item.title} />

                        <div className="news-content">

                            <small>{item.date}</small>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <button>Read More →</button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default NewsSection;