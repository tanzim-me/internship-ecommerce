import React from "react"
import SaleCard from "./SaleCard";

export default async function SaleProducts() {

    const res = await fetch("https://dummyjson.com/products?limit=6&skip=0");
    const data1 = await res.json();
    const data = await data1.products;
    console.log(data);

    return(
        <>
        <div className="container flex flex-wrap justify-between items-center gap-x-[37px] gap-y-[120px]">
            {
                data.map(product => (
                    <SaleCard 
                        key={product.id}
                        productImageSrc={product.thumbnail}
                        productName={product.title}
                        price={product.price}
                        discountPrice={(product.price + product.discountPercentage * 0.01).toFixed(2)}
                    />
                ))
            }
        </div>
        </>
    )
}