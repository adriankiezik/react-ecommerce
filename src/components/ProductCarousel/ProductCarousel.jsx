import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Product from "./Product/Product";

const ProductCarousel = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      loop={true}
      centeredSlides={true}
      breakpoints={{
        400: {
          slidesPerView: 1.9,
        },
        500: {
          slidesPerView: 2.4,
        },
        650: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2.65,
        },
        850: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 3.5,
        },
        1200: {
          slidesPerView: 4,
        },
        1350: {
          slidesPerView: 4.5,
        },
        1500: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5.5,
        },
        1800: {
          slidesPerView: 6,
        },
      }}
    >
      <SwiperSlide>
        <Product
          image="/assets/product-1.jpg"
          title="T-Shirt Summer Vibes"
          price="$19.99"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
          image="/assets/product-2.jpg"
          title="T-Shirt Summer Vibes"
          price="$19.99"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
          image="/assets/product-3.jpg"
          title="T-Shirt Summer Vibes"
          price="$19.99"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
          image="/assets/product-4.jpg"
          title="T-Shirt Summer Vibes"
          price="$19.99"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
          image="/assets/product-5.jpg"
          title="T-Shirt Summer Vibes"
          price="$19.99"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
          image="/assets/product-6.jpg"
          title="T-Shirt Summer Vibes"
          price="$19.99"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductCarousel;
