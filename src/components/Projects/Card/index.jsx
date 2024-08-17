import React, { useState } from "react";
import "./Card.css";
import { AiOutlineShopping } from "react-icons/ai";
const Card = (props) => {
    const [ openStackExpandBar, setOpenStackExpandBar ] = useState(false);
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <div className="card-details">
                <div className="card-details-top">
                    <h2 className="title">{props.title}</h2>
                </div>
                <div className="card-details-middle">
                    <p className="description">
                        {props.description}
                    </p>
                </div>
                <div className="card-details-bottom">
                    <div className="stack-container">
                        <div className="stack-left">Stack</div>
                        <div className="stack-right">
                            <div className="stack-box-container">
                                {
                                    props.stack.slice(0, 4).map((list, index) => (
                                        <div className="stack-box" key={index}> {/* Added key prop */}
                                            <div className="stack-icon-container">
                                                <span className="stack-icon" style={{ color: list.iconColor }}>{list.icon}</span>
                                                <span className="stack-name">{list.name}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> {/* End stack box container */}
                            {
                                props.stack.length >= 4 && (
                                    <div className="stack-view-more">
                                        <div className="more-btn" onClick={() => setOpenStackExpandBar(!openStackExpandBar)}> {/* Toggle stack bar */}</div>
                                        <div className={`stack-container-box ${openStackExpandBar ? "open-stack-expand" : ""}`}>
                                            {/* <h3 className="title">More Stack Used</h3> */}
                                            <div className="stack-box-container">
                                                {
                                                    props.stack.slice(4).map((list, index) => (
                                                        <div className="stack-box" key={index + 4}> {/* Key adjusted for unique identification */}
                                                            <div className="stack-icon-container">
                                                                <span className="stack-icon" style={{ color: list.iconColor }}>{list.icon}</span>
                                                                <span className="stack-name">{list.name}</span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>{ /* End Stack Card Container */}
                    <div className="button-container ">
                        <a href={props.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>
                        <div className="btn-share"><AiOutlineShopping/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
