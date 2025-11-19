import Image from 'next/image';
import React from 'react'
import Products from './components/Products';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from "next/font/google";
import Link from 'next/link'
import SaleProducts from './components/SaleProducts';

const Josefin = Josefin_Sans({
  subsets: ["latin"]
})

const lato = Lato({
    subsets: ["latin"], 
    weight: ["400"]
}) 

export default function page() {

  return (
    <>
      <div className='flex justify-center items-center'>
        <Image src="/images/promotional.png" alt="banner image" width={1920} height={764} />
      </div>
      <h2 className={`${Josefin.className} font-bold text-[42px] text-[#1A0B5B] text-center mt-[129px] mb-12`}>Featured Products</h2>
      <Products />
      <h2 className={`${Josefin.className} font-bold text-[42px] text-[#1A0B5B] text-center mb-[19px]`}>Latest Products</h2>

      <div className='flex justify-center'>
          <ul className={`${lato.className} flex gap-[35px] text-[#0D0E43] text-[16px]`}>
              <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">New Arrival</Link></li>
              <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Best Seller</Link></li>
              <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Featured</Link></li>
              <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Special Offer</Link></li>
          </ul>
      </div>
      <SaleProducts />
    </>
  );
}