import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='hidden xl:block xl:text-5xl xl:font-serif'>
        <Link href={'/'}>Joe Matthews Landscaping</Link>
    </div>
  )
}

export default Logo