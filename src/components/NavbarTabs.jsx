import React, { useState } from "react";
import "./NavbarTabs.css";

const tabs = [
    "At a Glance",
    "Safari Parks",
    "Areas",
    "Where to Stay",
    "When to Go",
    "Trip Ideas",
    "Experiencess",

];

function NavbarTabs() {
    const [active, setActive] = useState("Overview");

    return (
        <section className="navbar-tabs">

            <div className="tabs-container">

                {tabs.map((tab) => (

                    <button
                        key={tab}
                        className={active === tab ? "tab active-tab" : "tab"}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>

                ))}

            </div>

        </section>
    );
}

export default NavbarTabs;