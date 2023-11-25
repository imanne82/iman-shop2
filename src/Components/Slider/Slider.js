import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';
import slide1 from '../../img/slid-1.jpg'
import slide2 from '../../img/slid-2.jpg'
import slide3 from '../../img/slid-3.jpg'
import slide4 from '../../img/slid-4.jpg'
// import required modules
import {Pagination} from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper height"
                id={'slider-container'}

            >
                <SwiperSlide className='slider-head'><Link to={'/'}><img src={slide1} alt=""/></Link></SwiperSlide>
                <SwiperSlide className='slider-head'><Link to={'/'}><img src={slide2} alt=""/></Link></SwiperSlide>
                <SwiperSlide className='slider-head'><Link to={'/'}><img src={slide3} alt=""/></Link></SwiperSlide>
                <SwiperSlide className='slider-head'> <Link to={'/'}><img src={slide4} alt=""/></Link></SwiperSlide>

            </Swiper>
        </>
    );
}
