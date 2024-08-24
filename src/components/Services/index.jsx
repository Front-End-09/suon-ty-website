import React from "react";
import "./Service.css"
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

  
  const skill = [
    { icon: <FaPaintBrush className="icon"/>, title: 'UI/UX Design', description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!", color: 'blueviolet' },
    { icon: <FaCode className="icon"/>, title: 'Web Development', description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!", color: 'var(--color-success)' },
    { icon: <FcDocument className="icon"/>, title: 'Content Creation', description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!", color: '#0866FF' }
  ];
  
  const Service = () => {
    return (
      <section id="service">
        <div className="section-wrapper service-wrapper">
          <div className="section-header center">
            <h1 className="primary-title">My Skills</h1>
            <p className="text-muted description">
              I transform your ideas, and consequently your desires, into a
              distinctive web project that both inspires you and captivates your customers.
            </p>
          </div>
          <div className="service-group">
            {skill.map((item, index) => {
              return (
                <article className="service" style={{ "--color-primary": item.color }} key={index}>
                  <div className="service-top">
                    <div className="icon-container">
                       {item.icon}
                    </div>
                    <h3 className="title">{item.title}</h3>
                  </div>
                  <div className="service-middle">
                    <p className="text-muted description">
                      {item.description}
                    </p>
                  </div>
                  <div className="service-bottom">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
export default Service;