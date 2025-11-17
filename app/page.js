import Image from 'next/image';
import React from 'react'
import Card from './components/Card';

export default function page() {
  return(
    <>
      <div className='flex justify-center items-center'>
        <Image src="/images/promotional.png" alt="banner image" width={1920} height={764} />
      </div>
      <Card imgSrc="/images/logo.png" productTitle="Hello" productCode={200} productPrice={"$100"}/>
    </>
  );
}