import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
    subsets: ["latin"]
})

export default function SaleCard({ productImageSrc, productName, price, discountPrice }) {

    return(
        <>
            <div className="w-[360px] h-[306px]">
                <div className="w-[360px] h-[270px] bg-[#F7F7F7] relative">
                    <Image className="object-contain" src={productImageSrc} alt="sale product image" fill />
                </div>
                <div className={`${josefin.className} font-normal text-[16px] text-[#151875] flex justify-between mt-4`}>
                    <h2>{productName}</h2>
                    <div className="w-[130px] flex justify-evenly items-center">
                        <p>{price}</p>
                        <p className="text-[#FB2448] text-[12px] line-through">{discountPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )
}