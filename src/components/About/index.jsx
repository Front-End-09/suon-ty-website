import React from "react";
import "./About.css"
import { profile1 } from "../../images";

const About = () => {
    return(
        <section id="about">
             <div className="section-wrapper about-container">
                <div className="me-container blur-effect">
                    <div className="photo-container">
                        <img src={profile1} alt="" />
                    </div>
                </div>
                <div className="section-header">
                    <h2 className="primary-title">About Me</h2>
                    <h1 className="title">I am <span className="color-primary">Suon Ty</span></h1>
                    <p className="text-muted description">
                        Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and
                        responsive applications. Proficient in multiple programming languages and frameworks, 
                        as well as database design and management. Strong problem-solving and analytical skills, 
                        and a track record of delivering high-quality code on time and on budget.
                    </p>
                </div>
             </div>
        </section>
    );
}
export default About;