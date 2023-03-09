import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="py-4">
        <Image src="/assets/CatwikiLogo.svg" alt="" width={100} height={50}/>
    </div>
  )
}

export default Header