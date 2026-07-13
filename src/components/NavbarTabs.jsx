import React, { useState } from "react";
import "./NavbarTabs.css";

const tabs = [
    { name: "At a Glance", id: "intro" },
    { name: "Safari Parks", id: "visit" },
    { name: "Areas", id: "trips" },
    { name: "Where to Stay", id: "lodges" },
    { name: "When to Go", id: "reasons" },
    { name: "Trip Ideas", id: "news" },
    { name: "Experiences", id: "experts" },
];

function NavbarTabs() {
    const [active, setActive] = useState("intro");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (tab) => {
        setActive(tab.id);
        setMenuOpen(false);

        const section = document.getElementById(tab.id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="navbar-tabs">

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`tabs-container ${menuOpen ? "show" : ""}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab ${active === tab.id ? "active-tab" : ""}`}
                        onClick={() => handleClick(tab)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

        </section>
    );
}

export default NavbarTabs;