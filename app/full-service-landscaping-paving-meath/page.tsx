import Image from "next/image"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Outdoor Transformation | Joe Matthews Landscaping & Paving",
  description:
    "Full landscaping & paving project in Collinstown, Westmeath. Featuring a stone waterfall, granite patio, tiered garden beds, paving, circular patio, lawns & more.",
};
const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_2.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif text-[#355E3B] mb-4">
          COMPLETE OUTDOOR TRANSFORMATION / COLLINSTOWN, WESTMEATH
        </h1>
        <div className="md:text-xl text-lg text-gray-700 pl-16 pr-16 md:w-[75%]">
          We recently completed a full landscaping and paving transformation for this stunning countryside property. The project included a natural stone waterfall, tiered garden beds, a granite patio area at the side of the house, paving at the front and back of the property and a walled circular patio beside the water feature brings structure and elegance to the space, while carefully placed planting areas soften the layout. Lawns, kerbing and front entrance paving were also completed to enhance the overall aesthetic and functionality of the property.  
        </div>
      </div>
      <div>
        <video
          src={"/newjob/waterfall_vid.mp4"}
          controls
          autoPlay
          loop
          className="w-[80%] mx-auto rounded-xl shadow-md mb-12 md:h-auto h-[40vh] object-cover"
        >

        </video>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_9.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_4.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_5.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_7.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_1.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_3.jpg"
            alt="Main image"
            width={1600}
            height={700}
            className="rounded-xl object-cover w-full md:h-auto h-[40vh]"
          />
        </div>
      </div>
    </div>
  )
}

export default page