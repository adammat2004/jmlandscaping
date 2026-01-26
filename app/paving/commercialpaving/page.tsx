import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Commercial Paving & Landscaping Project | Clonsilla, Dublin',
  description: 'View our commercial paving and landscaping project at a large apartment development in Clonsilla, Dublin. Professional paving services for commercial properties across Dublin, Meath, and Louth.',
  openGraph: {
    title: 'Commercial Paving & Landscaping Project | Clonsilla, Dublin',
    description: 'Professional commercial paving and landscaping services completed at a large apartment development in Clonsilla, Dublin.',
    url: `${baseUrl}/paving/commercialpaving`,
    images: [
      {
        url: `${baseUrl}/paving2/IMG-4669.jpg`,
        width: 1200,
        height: 630,
        alt: 'Commercial paving and landscaping project in Clonsilla, Dublin',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/paving/commercialpaving`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/paving2/IMG-4669.jpg"
            alt="Commercial paving and landscaping project at apartment development in Clonsilla, Dublin"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-[150vh]"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          PAVING & LANDSCAPING / CLONSILLA, DUBLIN
        </h1>
        <div className="text-lg md:text-xl text-gray-700">
          All paving and landscaping completed by us at large apartment development in clonsilla. 
        </div>
      </div>

      <div className="flex justify-center mb-12">
            <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
                <Image
                src="/mainImages/IMG_6073.jpg"
                alt="Commercial paving installation at apartment development in Clonsilla, Dublin"
                width={1600}
                height={700}
                className="rounded-xl object-cover w-full h-auto"
                />
            </div>
        </div>

      {/* Two Images Side-by-Side (inside same width as singles) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving2/IMG-4668.jpg"
              alt="Paved garden path at commercial landscaping project in Clonsilla, Dublin"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving2/IMG-4671.jpg"
              alt="Commercial patio paving installation in Clonsilla, Dublin"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          PROGRESS PICTURES
        </h1>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving2/IMG-2712.jpg"
              alt="Paving progress photo showing garden path installation in Clonsilla, Dublin"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/paving2/IMG-2723.jpg"
              alt="Paving progress photo showing patio installation in Clonsilla, Dublin"
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