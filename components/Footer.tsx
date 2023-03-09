import Image from 'next/image'
import React from 'react'
const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl py-2 px-16 flex justify-between items-center'>
      <Image src="/assets/CatwikiLogo.svg" className='brightness-[10000%]' width={150} height={50} alt=""/>
      <span>&copy; created by Hsienz - devChallenge.io 2021</span>
    </div>
  )
}

export default Footer