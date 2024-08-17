import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { profile1 } from "../../images";

const data = [
    {
        avatar: profile1,
        name: 'Suon Ty',
        review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam
                 ab culpa consectetur architecto earum, atque dicta cupiditate officia laboriosam ratione
                 voluptatibus molestias corrupti ullam cumque. Repellat earum aspernatur eveniet!
                 `
    },
    {
        avatar: profile1,
        name: 'Suon Ty',
        review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam
                 ab culpa consectetur architecto earum, atque dicta cupiditate officia laboriosam ratione
                 voluptatibus molestias corrupti ullam cumque. Repellat earum aspernatur eveniet!
                 `
    },
    {
        avatar: profile1,
        name: 'Suon Ty',
        review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam
                 ab culpa consectetur architecto earum, atque dicta cupiditate officia laboriosam ratione
                 voluptatibus molestias corrupti ullam cumque. Repellat earum aspernatur eveniet!
                 `
    },
    {
        avatar: profile1,
        name: 'Suon Ty',
        review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam
                 ab culpa consectetur architecto earum, atque dicta cupiditate officia laboriosam ratione
                 voluptatibus molestias corrupti ullam cumque. Repellat earum aspernatur eveniet!
                 `
    },
];

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="section-wrapper">
                <div className="section-header">
                    <h2 className="primary-title">Testimonial</h2>
                    <p className="text-muted description">
                        Discover what clients are saying about their experiences working 
                        with me as their trusted web developer. From startups to established businesses, my dedication 
                        to crafting exceptional online experiences shines through in their words. 
                    </p>
                </div>
                <Swiper 
                   className="testimonial-container"
                   modules={[Pagination]}
                   spaceBetween={40}
                   slidesPerView={1}
                   pagination={{ clickable: true }}
                   breakpoints={{
                        700: {
                            slidesPerView: 2,
                        }
                   }}
                >
                    {data.map(({ avatar, name, review }, index) => (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client-avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h3 className="client-name">{name}</h3>
                            <small className="client-review">{review}</small>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
