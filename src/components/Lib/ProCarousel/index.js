import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'

import './style.css'

//
import useWindowsSize from '../../../hooks/useWindowsSize';

SwiperCore.use([Navigation]);

export default function ProCarousel({
    children,
    prevClick,
    nextClick,
    setPrevClick,
    setNextClick,
}) {
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

    const [width,] = useWindowsSize()

    return (
        <Swiper
            tag="section"
            wrapperTag="ul"
            loop={true}
            slidesPerView="auto"
            navigation
            spaceBetween={width < 1200 ? 30 : 50}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    // spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            onInit={(swiper) => {
                //on initalize set swiper to state
                setSwiper(swiper)
            }}
            onReachEnd={() => {
                //on ending all items of slider
            }}
        // onSlideChange={(swiper) => {
        //     console.log("slide swiper", swiper.navigation.nextEl)
        // }}
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

// not working true
// ProCarousel.propTypes = {
//     children: PropTypes.any.isRequired
// };