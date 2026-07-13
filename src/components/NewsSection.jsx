import React from "react";
import "./NewsSection.css";

const news = [
    {
        id: 1,
        image:
            "https://www.shutterstock.com/image-photo/two-african-bush-elephant-drinking-260nw-2771866383.jpg",
        title: "Witness the Great Migration in Tanzania",
        date: "3 March 2026",
        description:
            "Experience one of nature's greatest spectacles as millions of wildebeest and zebras cross the Serengeti."
    },
    {
        id: 2,
        image:
            "https://centralmarket.com.my/wp-content/uploads/2023/11/Rizq-Craft-Shop-1-650x650.jpg",
        title: "African Handmade Crafts: A Journey Through Tanzania's Artistriy",
        date: "11 March 2026",
        description:
            "Discover our hand-picked collection of Tanzania's finest luxury safari camps and lodges."
    },
    {

        id: 3,
        image:
            "https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg",
        title: "Top 10 Luxury Safari Lodges",
        date: "20 March 2026",
        description:
            "Explore the most exclusive and luxurious safari lodges in Tanzania."
    },
    {
        id: 4,
        image:
            "https://c8.alamy.com/comp/E615Y0/fisher-family-on-a-pirogue-on-the-congo-river-near-tshumbiri-bandundu-E615Y0.jpg",
        title: "Why Zanzibar is the Perfect Beach Escape",
        date: "30 March 2026",
        description:
            "Relax on white sand beaches, explore Stone Town and enjoy unforgettable sunsets."
    }
];

function NewsSection() {
    return (
        <section className="news" id="news">

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