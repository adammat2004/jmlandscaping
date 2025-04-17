import React from 'react'
import Image from 'next/image'
import logo from '../../../public/mainlogo.png'

const LogoImage = () => {
  return (
    <div className=''>
        <Image src={logo} alt='logo' width={200} height={200}/>
    </div>
  )
}

export default LogoImage