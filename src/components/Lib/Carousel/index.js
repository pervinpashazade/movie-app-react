import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'

import './style.css'

export default function CustomCarousel(props) {

    const { images, slidesToShow, slidesToScroll } = props;

    return (
        <Swiper tag="section" wrapperTag="ul" loop={true}>
            {images.map((item, key) => (
                <SwiperSlide key={key} tag="li">
                    <img className="home__cover" src={item} alt={"123"} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}