
import React, { useEffect, useState } from "react";
import "./Facts.css"
import Odometer from "react-odometerjs"

const Facts = () => {
    const [ experience, setExperience ] = useState(0);
    const [ project, setProjects ] = useState(0);
    const [ client, setSatisfied ] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(10)
            setProjects(150);
            setSatisfied(2.50)
        },3000)
        return() => {
            clearTimeout(timeoutId)
        }
    }, [])
    return(
        <div className="fact-container">
            <div className="fact-item">
                <div className="count-container">
                    <Odometer
                       value={experience}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Years Of Experience</p>
            </div>
            <div className="fact-item">
                <div className="count-container">
                    <Odometer
                       value={project}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Completed Projects</p>
            </div>
            <div className="fact-item">
                <div className="count-container">
                    <Odometer
                       value={client}
                    />
                    <span className="indicator">K</span>
                </div>
                <p className="name">Satisfied Clients</p>
            </div>
        </div>
    );
}
export default Facts