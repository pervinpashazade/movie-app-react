import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'

import './style.css'

SwiperCore.use([Navigation]);

export default function CustomCarousel(props) {

    const {
        images,
        prevClick,
        nextClick,
        setPrevClick,
        setNextClick,
    } = props;

    const [swiper, setSwiper] = useState(undefined)

    useEffect(() => {
        if (prevClick && swiper) { //&& swiper maybe useless
            swiper.slidePrev();
            setPrevClick(false)
        }
    })

    useEffect(() => {
        if (nextClick && swiper) {
            swiper.slideNext();
            setNextClick(false)
        }
    })

    return (
        <Swiper
            tag="section"
            wrapperTag="ul"
            loop={true}
            slidesPerView="auto"
            navigation
            // effect={"fade"} //not working
            onInit={(swiper) => {
                setSwiper(swiper)
            }}
        >
            {images.map((item, key) => (
                <SwiperSlide key={key} tag="li"

                >
                    <div className="home__cover" style={
                        {
                            height: 669.547+'px',
                            backgroundImage: `url(${item})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }
                    }></div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}