import React, { useState } from "react";
import "./Hero.css";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1717361279773-b2e7ee713d2e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tanzania Safaris",
    },
    {
        image:
            "https://w0.peakpx.com/wallpaper/436/922/HD-wallpaper-running-zebras-seen-from-above.jpg",
        title: "Tanzania Safaris",
    },
    {
        image:
            "https://i.pinimg.com/736x/5c/ee/e0/5ceee01867dd4c0a21a7311aab073ec7.jpg",
        title: "Tanzania Safaris",
    },
    {
        image:
            "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9kZ2V8ZW58MHx8MHx8fDA%3D",
        title: "Tanzania Safaris",
    },
    {
        image:
            "https://static.vecteezy.com/system/resources/thumbnails/073/290/855/small/a-chimpanzee-is-looking-at-the-camera-in-the-forest-free-photo.jpeg",
        title: "Tanzania Safaris",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((current + 1) % slides.length);
    };

    const prev = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    return (
        <section className="hero">

            <img
                src={slides[current].image}
                alt=""
                className="hero-bg"
            />

            <div className="overlay"></div>

            <div className="hero-content">

                <h1>{slides[current].title}</h1>

                <div className="thumb-row">

                    <button className="circle-btn" onClick={prev}>
                        ←
                    </button>

                    {slides.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            className={
                                current === index
                                    ? "thumb active"
                                    : "thumb"
                            }
                            onClick={() => setCurrent(index)}
                            alt=""
                        />
                    ))}

                    <button className="circle-btn" onClick={next}>
                        →
                    </button>

                </div>

            </div>

            <button className="wishlist">
                ♡
            </button>

            <div className="hero-bottom"></div>

        </section>
    );
}