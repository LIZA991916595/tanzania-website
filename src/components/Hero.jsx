import React, { useState } from "react";
import "./Hero.css";

const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600",
        thumb: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300",
        title: "Tanzania Safaris"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1600",
        thumb: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=300",
        title: "Tanzania Safaris"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1600",
        thumb: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300",
        title: "Tanzania Safaris"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600",
        thumb: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300",
        title: "Tanzania Safaris"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1600",
        thumb: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=300",
        title: "Tanzania Safaris"
    }
];

export default function Hero() {

    const [active, setActive] = useState(0);

    const next = () => {
        setActive((active + 1) % images.length);
    }

    const prev = () => {
        setActive((active - 1 + images.length) % images.length);
    }

    return (

        <div className="hero">

            <img
                src={images[active].src}
                alt=""
                className="heroImage"
            />

            <div className="overlay"></div>

            <button className="arrow left" onClick={prev}>
                ❮
            </button>

            <button className="arrow right" onClick={next}>
                ❯
            </button>

            <div className="heroContent">

                <h1>{images[active].title}</h1>

                <p>
                    Luxury Tanzania Safari Holidays
                </p>

                <div className="thumbs">

                    {images.map((img, index) => (

                        <img

                            key={img.id}

                            src={img.thumb}

                            alt=""

                            className={
                                active === index
                                    ? "thumb active"
                                    : "thumb"
                            }

                            onClick={() => setActive(index)}

                        />

                    ))}

                </div>

            </div>

            <div className="curve"></div>

        </div>

    );

}