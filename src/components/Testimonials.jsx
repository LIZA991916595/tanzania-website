import React from "react";
import "./Testimonials.css";

const testimonials = [
    {
        id: 1,
        name: "Emily Johnson",
        country: "USA",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        review:
            "Our Tanzania safari was absolutely unforgettable. Every detail was perfectly organised, and seeing the Great Migration was a dream come true."
    },
    {
        id: 2,
        name: "Vive Roy",
        country: "India",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        review:
            "The lodges were luxurious, the guides were knowledgeable, and Zanzibar was the perfect ending to our adventure."
    },
    {
        id: 3,
        name: "Miliy John",
        country: "Australia",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        review:
            "One of the best travel experiences we've ever had. Everything exceeded our expectations from start to finish."
    }
];

function Testimonials() {
    return (
        <section className="testimonials" id="testimonals">

            <div className="testimonial-heading">

                <span>HAPPY TRAVELLERS</span>

                <h1>What Our Customers Say</h1>

                <div>
                    <h3>Excellent</h3>
                    <h3>A Perfect Vacation in Tanzania</h3>
                    <h3>The Yellow Zebra Team is Top</h3>

                    <h3>Amazing Time in Tanzania</h3>


                </div>

            </div>

            <div className="testimonial-grid">

                {testimonials.map((item) => (

                    <div className="testimonial-card" key={item.id}>

                        <img src={item.image} alt={item.name} />

                        <p className="review">
                            "{item.review}"
                        </p>

                        <h3>{item.name}</h3>

                        <span>{item.country}</span>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Testimonials;