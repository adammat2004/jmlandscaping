import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/waterfall1/IMG-1965.jpg"
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
          POND & PATIO / CARLANSTOWN, MEATH
        </h1>
        <div className="text-lg md:text-xl text-gray-700 pl-16 pr-16">
          A patio with walling and steps throughout it complete with a pond.
        </div>
      </div>

      {/* Single Image (Gazebo) */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/waterfall1/IMG-1966.jpg"
            alt="Gazebo"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/waterfall1/IMG-1967.jpg"
            alt="Gazebo"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/waterfall1/IMG-1964.jpg"
            alt="Gazebo"
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
            src="/waterfall1/IMG-1963.jpg"
            alt="Planting"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-[120vh] object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

