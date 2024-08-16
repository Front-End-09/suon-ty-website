import React, { useEffect, useRef, useState } from "react";
import "./Project.css";
import { sumArray } from "../../Helper";

const tabs = [
    { name: "All" },
    { name: "Web" },
    { name: "UI/UX" },
    { name: "Apps" }
];

const Project = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const itemEls = useRef([]);

    useEffect(() => {
        const prevEl = itemEls.current.filter((_, index) => index < activeIndex);
        setOffset(
            sumArray(
                prevEl.map(item => item.offsetWidth)
            )
        );
        setIndicatorWidth(itemEls.current[activeIndex].offsetWidth);
    }, [activeIndex]);

    return (
        <section id="projects">
            <div className="section-wrapper project-container">
                <div className="section-header center">
                    <h2 className="primary-title">Projects</h2>
                </div>
                <nav>
                    {
                        tabs.map((tab, index) => (
                            <button
                                ref={el => itemEls.current[index] = el}
                                onClick={() => {
                                    setActiveIndex(index);
                                }}
                                key={index}
                            >
                                {tab.name}
                            </button>
                        ))
                    }
                    <span className="active-indicator" style={{
                        left: `${offset}px`,
                        width: `${indicatorWidth}px`
                    }}></span>
                </nav>
            </div>
        </section>
    );
}

export default Project;
