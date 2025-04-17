import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="bg-[#394021] text-white pt-16 pb-6 w-full text-center h-50px">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
          HAVE A PROJECT IN MIND? SCHEDULE A CONSULTATION.
        </h1>

        <Link
          href="/contact"
          className="inline-block bg-white text-[#355E3B] text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Contact Us
        </Link>
    </div>
  )
}

export default Footer