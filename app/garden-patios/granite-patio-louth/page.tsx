import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Townhouse Patio & Planting Project | Drogheda, Louth',
  description: 'Townhouse back garden completed with granite slabs, walling and planting in Drogheda, Louth. Expert patio and garden design services across Louth, Meath, and Dublin.',
  openGraph: {
    title: 'Townhouse Patio & Planting Project | Drogheda, Louth',
    description: 'Townhouse back garden with granite slabs, walling and planting completed in Drogheda, Louth.',
    url: `${baseUrl}/garden-patios/granite-patio-louth`,
    images: [
      {
        url: `${baseUrl}/patio1/IMG-1737.jpg`,
        width: 1200,
        height: 630,
        alt: 'Townhouse patio and planting project in Drogheda, Louth',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/garden-patios/granite-patio-louth`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/patio1/IMG-1737.jpg"
            alt="Main image"
            width={1600}
            height={500}
            className="rounded-xl object-cover w-full h-[100vh]"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          TOWNHOUSE PATIO & PLANTING/ DROGHEDA, LOUTH
        </h1>
        <div className="text-lg md:text-xl text-gray-700">
          The back garden of a townhouse completed with granite slabs, walling and planting.
        </div>
      </div>

      {/* Single Image (Gazebo) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/patio1/IMG-1735.jpg"
            alt="IMG"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-[80vh]"
          />
        </div>
      </div>

      {/* Two Images Side-by-Side (inside same width as singles) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
            <Image
              src="/patio1/IMG-1737.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
            <Image
              src="/patio1/IMG-1736.jpg"
              alt="Patio"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Single Image (Patio) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/patio1/IMG-1738.jpg"
            alt="Patio"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-[100vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default page;