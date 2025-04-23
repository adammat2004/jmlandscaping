import Link from 'next/link'
import React from 'react'

const NavLinks   = () => {
  return (
    <div>
        <div className='hidden sm:flex flex-row items-center justify-between gap-3 sm:gap-15 pr-32 pl-10 text-2xl font-mono'>
            <Link className='hover:font-bold' href={'/'}>Home</Link>
            <Link className='hover:font-bold' href={'/about'}>About</Link>
            <Link className='hover:font-bold' href={'/projects'}>Projects</Link>
            <Link className='hover:font-bold' href={'/contact'}>Contact</Link>   
        </div>
    </div>
  )
}

export default NavLinks