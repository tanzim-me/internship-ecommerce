"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { Lato } from "next/font/google";
import React from 'react'

const lato = Lato({
    subsets: ["latin"], 
    weight: ["400"]
})               

const Navbar = () => {
  return (
    <>
        <nav className='py-[19px]'>
            <div className='container flex justify-between items-center'>
                <div>
                    <Image src="/images/Hekto.png" alt='logo image' width={98} height={34} />
                </div>
                <div>
                    <ul className={`${lato.className} flex gap-[35px] text-[#0D0E43] text-[16px]`}>
                        <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Home</Link></li>
                        <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Pages</Link></li>
                        <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Products</Link></li>
                        <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Blog</Link></li>
                        <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Shop</Link></li>
                        <li className='hover:text-[#FB2E86] hover:scale-110 transition duration-300'><Link href="/">Contact</Link></li>
                    </ul>
                </div>
                <div className='w-[317px] h-10 flex justify-between'>
                    <input className="w-[266px] px-5 border-2 border-[#E7E6EF] focus:outline-0" type="text" />
                    <button className='w-[51px] bg-[#FB2E86] flex justify-center items-center active:scale-110 transition duration-100'><FiSearch /></button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar