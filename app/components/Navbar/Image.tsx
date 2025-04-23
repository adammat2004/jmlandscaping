import React from 'react'
import Image from 'next/image'

const LogoImage = () => {
  return (
    <div className=''>
        <Image src={'/chatgptlogo1.png'} alt='logo' width={200} height={200}/>
    </div>
  )
}

export default LogoImage