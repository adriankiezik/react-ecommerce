import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Product from "./Product/Product";

const ProductCarousel = () => {
  return (
    <Swiper slidesPerView={4.5} loop={true} centeredSlides={true}>
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
