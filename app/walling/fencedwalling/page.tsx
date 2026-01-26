import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Fencing & Walling Project | Cortown, Meath',
  description: 'Walling and fencing project replacing hedge with walling, fencing and hedging in Cortown, Meath. Expert walling and fencing services across Meath, Dublin, and Louth.',
  openGraph: {
    title: 'Fencing & Walling Project | Cortown, Meath',
    description: 'Walling and fencing project replacing hedge completed in Cortown, Meath.',
    url: `${baseUrl}/walling/fencedwalling`,
    images: [
      {
        url: `${baseUrl}/walling2/IMG-1259.jpg`,
        width: 1200,
        height: 630,
        alt: 'Fencing and walling project in Cortown, Meath',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/walling/fencedwalling`,
  },
};

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/walling2/IMG-1259.jpg"
            alt="Fencing and Walling"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          FENCING & WALLING / CORTOWN, MEATH
        </h1>
        <div className="text-lg md:text-xl text-gray-700">
          We removed a hedge at the back of this house and replaced it with this walling and fencing complete with hedging. 
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/walling2/IMG-1260.jpg"
            alt="Fencing and Walling"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full h-[150vh] object-top"
          />
        </div>
      </div>


      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/walling2/IMG-1262.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/walling2/IMG-1263.jpg"
              alt="Patio"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          PROGRESS PHOTOS
        </h1>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/walling2/IMG-1256.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full mx-auto lg:w-[49%] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/walling2/IMG-1257.jpg"
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