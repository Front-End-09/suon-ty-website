import React from "react";
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
    return(
        <section id="contact">
            <div className="section-wrapper contact-container">
                <div className="section-header">
                    <h2 className="primary-title">Contace Me</h2>
                    <p className="text-muted description">
                        Ready to take your digital presence to the next level? Whether 
                        you're looking to launch a new website, revamp an existing one, or need expert advice 
                        on the best web technologies, I'm here to help. Reach out to discuss your project, ask 
                        questions, or just say hello.
                    </p>
                </div>
                <div className="contact-group">
                    <div className="contact-optionts">
                        <article className="contact-option">
                            <MdOutlineEmail className="contact-icon"/>
                            <h3>Email</h3>
                            <h5>suontii2023@gmail.com</h5>
                         <a href="mailto:suontii2023@gmail.com" target="_blank" rel="noreferrer" className="btn">Send a message</a>
                        </article>
                        <article className="contact-option">
                            <RiMessengerLine className="contact-icon"/>
                            <h3>Messenger</h3>
                            <h5>suontii2023@gmail.com</h5>
                         <a href="mailto:suontii2023@gmail.com" target="_blank" rel="noreferrer" className="btn">Send a message</a>
                        </article>
                        <article className="contact-option">
                            <BsWhatsapp className="contact-icon"/>
                            <h3>Whatapp</h3>
                            <h5>016639011</h5>
                            <a href="mailto:suontii2023@gmail.com" target="_blank" rel="noreferrer" className="btn">Send a message</a>
                        </article>
                    </div>
                    <form>
                        <input className="name" type="text" name="name" placeholder="Your full name" required/>
                        <input type="email" name="email" placeholder="Your email" required/>
                        <textarea name="message" rows={7} placeholder="Your message"></textarea>
                        <button className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section >
    );
}
export default Contact;