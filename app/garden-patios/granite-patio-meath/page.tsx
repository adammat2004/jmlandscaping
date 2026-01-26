import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Circular Granite Patio Project | Kells, Meath',
  description: 'Circular granite patio surrounded by pebbled shrub beds and planting in Kells, Meath. Expert patio design and installation services across Meath, Dublin, and Louth.',
  openGraph: {
    title: 'Circular Granite Patio Project | Kells, Meath',
    description: 'Circular granite patio with pebbled shrub beds and planting completed in Kells, Meath.',
    url: `${baseUrl}/garden-patios/granite-patio-meath`,
    images: [
      {
        url: `${baseUrl}/patio3/IMG_8576.jpg`,
        width: 1200,
        height: 630,
        alt: 'Circular granite patio project in Kells, Meath',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/garden-patios/granite-patio-meath`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/patio3/IMG_8576.jpg"
            alt="Circular granite patio surrounded by pebbled shrub beds in Kells, Meath"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          CIRCULAR PATIO / KELLS, MEATH
        </h1>
        <div className="text-lg md:text-xl text-gray-700">
          A circular granite patio surrounded by pebbled shrub beds and planting.
        </div>
      </div>

      {/* Single Image (Gazebo) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/patio3/IMG_8580.jpg"
            alt="Circular granite patio with surrounding planting in Kells, Meath"
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
              src="/patio3/IMG_8577.jpg"
              alt="Granite patio detail showing pebbled shrub bed border in Kells, Meath"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/patio3/IMG_8578.jpg"
              alt="Circular granite patio installation detail in Kells, Meath"
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
            src="/patio3/IMG_8575.jpg"
            alt="Garden planting and shrub beds around circular granite patio in Kells, Meath"
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

