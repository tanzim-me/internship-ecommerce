import { Lato } from 'next/font/google'
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const lato = Lato({
    subsets: ["latin"],
    weight: ["700"],
})

const josefin = Josefin_Sans({
    subsets: ["latin"],
})

const Card = ({imgSrc, productTitle, productCode, productPrice}) => {
  return (
    <div className="w-[270px] h-[361px] flex flex-col justify-between shadow-xl/30 group hover:scale-105 transition duration-200">
        <div className='h-[236px] bg-gray-300'>
            <Image src={imgSrc} alt="product image" width={270} height={236} className='object-cover' />
        </div>
        <div className='h-[125px] bg-white group-hover:bg-[#2F1AC4] transition duration-200 flex flex-col gap-3 justify-center items-center text-center pt-[15px]'>
            <h1 className={`${lato.className} text-[18px] text-[#FB2E86] group-hover:text-white transition duration-200 font-bold`}>{productTitle}</h1>
            <p className={`${josefin.className} text-[14px] text-[#151875] group-hover:text-white transition duration-200 font-normal`}>code - {productCode}</p>
            <p className={`${lato.className} text-[14px] text-[#151875] group-hover:text-white transition duration-200 font-normal`}>price - {productPrice}</p>
        </div>
    </div>
  )
}

export default Card