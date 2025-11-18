import Image from 'next/image';
import React from 'react'
import Products from './components/Products';

export default function page() {

  return (
    <>
      <div className='flex justify-center items-center'>
        <Image src="/images/promotional.png" alt="banner image" width={1920} height={764} />
      </div>

      <Products />
    </>
  );
}