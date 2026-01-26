import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Garden Path & Patio Project | Wilkinstown, Meath',
  description: 'Garden path leading to paved patio area with walling and planting in Wilkinstown, Meath. Professional garden path and patio installation services across Meath, Dublin, and Louth.',
  openGraph: {
    title: 'Garden Path & Patio Project | Wilkinstown, Meath',
    description: 'Garden path and paved patio project with walling and planting completed in Wilkinstown, Meath.',
    url: `${baseUrl}/paving/gardenpath`,
    images: [
      {
        url: `${baseUrl}/paving5/mainimage.jpg`,
        width: 1200,
        height: 630,
        alt: 'Garden path and patio project in Wilkinstown, Meath',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/paving/gardenpath`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/paving5/mainimage.jpg"
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
          GARDEN PATHS / WILKINSTOWN, MEATH
        </h1>
        <div className="text-lg md:text-xl text-gray-700">
          A path through the back garden leading to a paved patio area with walling and planting. 
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/paving5/IMG-1679.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-[120vh]"
          />
        </div>
      </div>

      {/* Two Images Side-by-Side (inside same width as singles) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving5/IMG-1667.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving5/IMG-1668.jpg"
              alt="Patio"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving5/IMG-1675.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving5/IMG-1678.jpg"
              alt="Patio"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;