import React from "react";
import "./Skills.css";
import { experience } from "../../data";
import SkilCard from "./SkillCard";

const Skills = () => {
    return (
        <section id="skill">
            <div className="section-wrapper">
                <div className="section-header center">
                    <div className="primary-title">My Skills</div>
                </div>
                <div className="skill-container">
                    {experience.map((list, index) => (
                        <SkilCard
                            {...list}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
