import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Gazebo Spa & BBQ Area Project | Castletown, Meath',
  description: 'Custom gazebo built for BBQ and spa area with paving, walling and landscaping in Castletown, Meath. Expert gazebo construction services across Meath, Dublin, and Louth.',
  openGraph: {
    title: 'Gazebo Spa & BBQ Area Project | Castletown, Meath',
    description: 'Custom gazebo for BBQ and spa area with paving, walling and landscaping completed in Castletown, Meath.',
    url: `${baseUrl}/gazebos/gazebospa`,
    images: [
      {
        url: `${baseUrl}/ourgazebo/IMG_8691.jpg`,
        width: 1200,
        height: 630,
        alt: 'Gazebo spa and BBQ area project in Castletown, Meath',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/gazebos/gazebospa`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/ourgazebo/IMG_8691.jpg"
            alt="Custom gazebo built for BBQ and spa area with paving and landscaping in Castletown, Meath"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          GAZEBO SPA / CASTLETOWN, MEATH
        </h1>
        <div className="text-lg md:text-xl text-gray-700 pl-16 pr-16">
          A Gazebo built to be used as a BBQ and spa area. All construction of the gazebo was completed by us along with the paving, walling and landscaping around it.
        </div>
      </div>

      {/* Single Image (Gazebo) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/ourgazebo/IMG-4092.jpg"
            alt="Custom timber gazebo construction for BBQ and spa area in Castletown, Meath"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Two Images Side-by-Side (inside same width as singles) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
            <Image
              src="/ourgazebo/IMG_8693.jpg"
              alt="Paving and landscaping around gazebo spa area in Castletown, Meath"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
            <Image
              src="/ourgazebo/IMG_8694.jpg"
              alt="Patio paving around custom gazebo in Castletown, Meath"
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
            src="/ourgazebo/IMG_8692.jpg"
            alt="Gazebo spa area with surrounding patio and walling in Castletown, Meath"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Single Image (Planting) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/ourgazebo/IMG-4077.jpg"
            alt="Garden planting and landscaping around gazebo spa area in Castletown, Meath"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-[110vh] object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

