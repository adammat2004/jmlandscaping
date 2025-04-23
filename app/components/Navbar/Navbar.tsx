import React from 'react'
import UserMenu from './UserMenu'
import Logo from './Logo'
import NavLinks from './NavLinks'
import LogoImage from './Image'

const Navbar = () => {
  return (
    <div className='absolute w-full bg-[#E8E8E8] z-10 shadow-sm'>
      <div className='px-4'>
        <div className='flex items-center justify-between lg:pt-6'>

          {/* Left: Logo (hidden on small screens) */}
          <div className='hidden lg:block'>
            <Logo />
          </div>

          {/* Center: LogoImage (always visible, centered using flex-1) */}
          <div className='flex-1 flex justify-center'>
            <LogoImage />
          </div>

          {/* Right: UserMenu always visible, NavLinks hidden on small screens */}
          <div className='flex items-center gap-4'>
            <div className='hidden md:flex'>
              <NavLinks />
            </div>
            <UserMenu />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
