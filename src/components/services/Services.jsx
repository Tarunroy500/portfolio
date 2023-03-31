import React from 'react'
import './services.css'
import { services } from '../../Data'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section-title text-cs">What I Do</h2>
        <p className="section-subtitle">
            My <span>Services</span>
        </p>

        <Swiper 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]} className="services-container container mySwiper">
            {services.map(({name, title, description, }, index)=>{
                return(
                    <SwiperSlide className="services-item card card-one">
                        <span className="services-subtitle text-cs">{name}</span>
                        <h3 className="services-title">{title}</h3>
                        <p className="services-description">{description}</p>

                        <a href="" className="link"></a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Services