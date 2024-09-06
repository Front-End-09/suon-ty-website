import React, { useEffect, useState, useRef} from "react";
import "./Navbar.css"
// import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data"
import { Link } from 'react-scroll'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
const Navbar = () => {
    const [ showSidebar, setShowSidebar ] = useState(false);
    const [ visible, setVisible ] = useState(false);
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > 145) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    },[])
    const contaianer = useRef(null)
    useEffect(() => {
        if (visible) {
            gsap.fromTo(
                ".navbar-container",
                {
                    y: -250,
                    width: '100%',
                },
                {
                    y: 0,
                    top: 0,
                    zIndex: 100,
                }
            );
        }
    }, [visible]);
    return(
        <nav className={`navbar-container ${visible ? "visible" : ""}`} ref={contaianer}>
            {
                showSidebar ? (
                    <div className="overlay" onClick={() => setShowSidebar(!showSidebar)}></div>
                ) : ""
            }
            {/* <div className="logo-container" onClick={() => setShowSidebar(!showSidebar)}>
                 <SiWebmoney/>
            </div> */}
            <div className={`tab-group ${showSidebar ? 'show' : '' } `}>
                <span className="icon-container close-btn" onClick={() => setShowSidebar(!showSidebar)}>
                   <FaTimes/>
                </span>
                {
                  menu.map((list,index) => (
                    <Link
                        //  activeClass="active"
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
                  ))
                }
            </div>
            <div className="nav-buttons-group">
                <button className="btn btn-primary">Hire Me <FaArrowUpRightFromSquare/></button>
                <FaBarsStaggered className="menu" onClick={() => setShowSidebar(!showSidebar)}/>
            </div>
        </nav>
    );
}
export default Navbar;