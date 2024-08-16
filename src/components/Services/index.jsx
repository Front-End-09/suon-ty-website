import React from "react";
import "./Service.css"
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

const Service = () => {
    return(
        <section id="service">
            <div className="section-wrapper service-wrapper">
                <div className="section-header center">
                  <h1 className="primary-title">Service</h1>
                  <p className="text-muted description">
                    I transform your ideas, and consequently your desires, into a 
                    distinctive web project that both inspires you and captivates your customers.
                  </p>
                </div>
                <div className="service-group">
                    <article className="service" style={{"--color-primary" : "blueviolet"}}>
                        <div className="service-top">
                            <div className="icon-container">
                                <FaPaintBrush className="icon"/>
                            </div>
                            <h3 className="title">UI/UX Design</h3>
                        </div>
                        <div className="service-moddle">
                            <p className="text-muted description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
                                voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
                                eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                            </p>
                        </div>
                        <div className="service-bottom">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </article>
                    {/* End UI/UX */}
                    <article className="service" style={{"--color-primary" : "var(--color-success)"}}>
                        <div className="service-top">
                            <div className="icon-container">
                                <BsCodeSquare className="icon"/>
                            </div>
                            <h3 className="title"> Web Development</h3>
                        </div>
                        <div className="service-moddle">
                            <p className="text-muted description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
                                voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
                                eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                            </p>
                        </div>
                        <div className="service-bottom">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </article>
                    {/* End Web Development */}
                    <article className="service"  style={{"--color-primary" : "blueviolet"}}>
                        <div className="service-top">
                            <div className="icon-container">
                                <TfiWrite className="icon"/>
                            </div>
                            <h3 className="title">Content Creation</h3>
                        </div>
                        <div className="service-moddle">
                            <p className="text-muted description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
                                voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
                                eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                            </p>
                        </div>
                        <div className="service-bottom">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </article>
                    {/* End Content creation */}
                </div>
            </div>
        </section>
    );
}
export default Service;