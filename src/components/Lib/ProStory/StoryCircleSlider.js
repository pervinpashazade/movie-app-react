import React from 'react'
// import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar  } from 'swiper'
import 'swiper/swiper-bundle.css'

import './style.css'

SwiperCore.use([Scrollbar ]);

export default function StoryCircleSlider({
    children,
    loop,
}) {

    return (
        <Swiper
            tag="section"
            wrapperTag="ul"
            loop={loop && true}
            slidesPerView={loop && "auto"}
            scrollbar
            breakpoints={{
                320: {
                    slidesPerView: 4
                },
                375: {
                    slidesPerView: 5
                },
                640: {
                    slidesPerView: 6,
                },
                768: {
                    slidesPerView: 6,
                },
                1024: {
                    slidesPerView: 9,
                },
            }}
        >
            {
                children.map((item, key) => (
                    <SwiperSlide key={key} tag="li">
                        {item}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}