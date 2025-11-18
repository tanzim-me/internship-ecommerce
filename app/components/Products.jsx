"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="container mt-20">
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id}>
            <Card
              imgSrc={item.thumbnail}
              productTitle={item.title}
              productCode={item.sku}
              productPrice={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
