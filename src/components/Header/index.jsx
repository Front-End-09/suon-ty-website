import React from "react";
import "./Header.css"
import { profile1 } from "../../images";
import Facts from "./Facts";

const Header = () => {
    return(
        <header id="header" className="blur-effect">
            <div className="stroke-text intro-text">HELLO</div>
            <div className="selection-wrapper header-container">
                <div className="column intro-container blur-effect">
                    <div className="header-info">
                        <div className="header-info-top">
                            Hello There! I'm <span className="color-primary">Suon Ty</span>
                        </div>
                        <div className="header-info-middle">
                            <h1 className="primary-title header-title">
                                I'M A WEB<br></br> DEVELOPER
                            </h1>
                            <p className="text-muted header-description">
                                I dissect intricate user experience challenges to engineer
                                integrity-focused solutions that <br></br> resonate with billions of users.
                            </p>
                            <Facts/>
                        </div>
                        <div className="header-info-bottom">
                            <button className="btn">Download Cv</button>
                            <a href="mailto:suontii2023@gmail.com" className="btn">Email Me</a>
                        </div>
                    </div>
                </div>
                <div className="column profile-wrapper">
                    <div className="profile-photo-container">
                        <img src={profile1} className="profile-photo" alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;