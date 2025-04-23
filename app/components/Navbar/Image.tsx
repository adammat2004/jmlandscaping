import React from 'react'
import Image from 'next/image'

const LogoImage = () => {
  return (
    <div className=''>
        <Image src={'/chatgptlogo1.png'} alt='logo' width={150} height={150}/>
    </div>
  )
}

export default LogoImage