import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Limestone Patio & Walling Project | Clonee, Dublin',
  description: 'Limestone patio and walling project in Clonee, Dublin. Professional patio and walling services across Dublin, Meath, and Louth.',
  openGraph: {
    title: 'Limestone Patio & Walling Project | Clonee, Dublin',
    description: 'Limestone patio and walling project completed in Clonee, Dublin.',
    url: `${baseUrl}/walling/patiowalling`,
    images: [
      {
        url: `${baseUrl}/walling1/IMG-0148.jpg`,
        width: 1200,
        height: 630,
        alt: 'Limestone patio and walling project in Clonee, Dublin',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/walling/patiowalling`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/walling1/IMG-0148.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          PATIO & WALLING / CLONEE, DUBLIN
        </h1>
        <div className="text-lg md:text-xl text-gray-700">
          Limestone patio. 
        </div>
      </div>

      {/* Single Image (Gazebo) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/walling1/IMG-0142.jpg"
            alt="Gazebo"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Two Images Side-by-Side (inside same width as singles) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/walling1/IMG-0145.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/walling1/IMG-0140.jpg"
              alt="Patio"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/walling1/IMG-0143.jpg"
            alt="Planting"
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