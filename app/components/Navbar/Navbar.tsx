import React from 'react'
import UserMenu from './UserMenu'
import Logo from './Logo'
import NavLinks from './NavLinks'
import LogoImage from './Image'

const Navbar = () => {
  return (
    <div className='absolute w-full bg-[#E8E8E8] z-10 shadow-sm'>
      <div className='pl-4 pr-4'> 
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0 lg:pt-6'>
          <Logo />
          <LogoImage />
          <NavLinks />
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar