import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProductNew from "../ProductNew/ProductNew";
import './SliderProduct.css';

export default function SliderProduct(props) {
    return (
        <>
            <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 640px
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
            >

                {props.src.product.map((product, index) => {
                    return <SwiperSlide key={index}>
                        <ProductNew title={product.title} src={product.src} link={product.link}
                                    price={product.price}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}

