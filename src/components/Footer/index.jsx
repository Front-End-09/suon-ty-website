import React from "react";
import "./Footer.css";
import { menu, socialHandles } from "../../data";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="section-wrapper">
                <ul className="nav-link-container">
                    {menu.map((list, index) => (
                        <Link
                            activeClass="active"
                            className="tab-item name"
                            to={list.name.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={index}
                        >
                            {list.name}
                        </Link>
                    ))}
                </ul>
                <div className="social-handle-container">
                    {socialHandles.map((list, index) => (
                        <a
                            href={list.url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-container social-handle"
                            key={index}
                        >
                            {list.icon}
                        </a>
                    ))}
                </div>
                <div className="copyright-container">
                    <h3>Copyright &copy; All rights reserved - | 2024</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
