import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/waterfall2/mainimage.jpg"
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
          WATERFALL / CASTLETOWN, MEATH
        </h1>
        <div className="text-lg md:text-xl text-gray-700 pl-16 pr-16">
          A sandstone waterfeature completed with landscaping around it.
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/waterfall.jpg"
            alt="Gazebo"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
            <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
                <Image
                src="/waterfall2/IMG-1266.jpg"
                alt="Path"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
                />
            </div>
            <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
                <Image
                src="/waterfall2/IMG-0902.jpg"
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
            src="/waterfall2/IMG-1192.jpg"
            alt="Gazebo"
            width={1200}
            height={500}
            className="rounded-xl object-cover w-full h-[100vh]"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] flex flex-wrap gap-4">
            <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
                <Image
                src="/waterfall2/IMG-0539.jpg"
                alt="Path"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
                />
            </div>
            <div className="w-full lg:w-[49%] rounded-xl overflow-hidden shadow-md mx-auto">
                <Image
                src="/waterfall2/IMG-0540.jpg"
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