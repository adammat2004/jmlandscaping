import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/landscaping2/frontimage.jpg"
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
            PAVING & LANDSCAPING / INCHICORE, DUBLIN
            </h1>
            <div className="text-lg md:text-xl text-gray-700">
            All paving and landscaping completed by us at large apartment development in Inchicore. 
            </div>
        </div>

        <div className="flex justify-center mb-12">
            <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
                <Image
                src="/landscaping2/IMG-6533.jpg"
                alt="Main image"
                width={1600}
                height={700}
                className="rounded-xl object-cover w-full h-[140vh]"
                />
            </div>
        </div>

      {/* Two Images Side-by-Side (inside same width as singles) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
          <div className="w-full lg:w-[49%] mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/landscaping2/IMG-6532.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-[49%] mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/landscaping2/IMG-6536.jpg"
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
          <div className="w-full lg:w-[49%] mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/landscaping2/IMG-6938.jpg"
              alt="Path"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-[49%] mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/landscaping2/IMG-6930.jpg"
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