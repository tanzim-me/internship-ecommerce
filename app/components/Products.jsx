"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    load();
  }, []);


  return (
    <div className="container">
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {products.map((item) => (
                <SwiperSlide>
                    <Card
                    key={item.id}
                    imgSrc={item.thumbnail}
                    productTitle={item.title}
                    productCode={item.sku}
                    productPrice={item.price}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}
