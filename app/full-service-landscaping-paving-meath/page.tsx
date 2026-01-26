import Image from "next/image"
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  title: 'Complete Outdoor Transformation | Collinstown, Westmeath',
  description: 'Full landscaping and paving transformation including natural stone waterfall, tiered garden beds, granite patio, paving, walled circular patio, lawns, and kerbing in Collinstown, Westmeath. Expert full-service landscaping across Westmeath, Meath, Dublin, and Louth.',
  openGraph: {
    title: 'Complete Outdoor Transformation | Collinstown, Westmeath',
    description: 'Full landscaping and paving transformation with natural stone waterfall, tiered garden beds, granite patio, and more completed in Collinstown, Westmeath.',
    url: `${baseUrl}/full-service-landscaping-paving-meath`,
    images: [
      {
        url: `${baseUrl}/newjob/pic_2.jpg`,
        width: 1200,
        height: 630,
        alt: 'Complete outdoor transformation project in Collinstown, Westmeath',
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/full-service-landscaping-paving-meath`,
  },
};
const page = () => {
  return (
    <div className="pt-72 bg-[#E8E8E8] pb-16">
      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <div className="w-[80%] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/newjob/pic_2.jpg"
            alt="Complete outdoor transformation with natural stone waterfall and landscaping in Collinstown, Westmeath"
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
            alt="Granite patio and tiered garden beds at complete outdoor transformation in Collinstown, Westmeath"
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
            alt="Natural stone waterfall feature with landscaping in Collinstown, Westmeath"
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
            alt="Walled circular patio and water feature landscaping in Collinstown, Westmeath"
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
            alt="Front entrance paving and landscaping at complete outdoor transformation in Collinstown, Westmeath"
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
            alt="Lawns and kerbing at complete outdoor transformation project in Collinstown, Westmeath"
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
            alt="Back garden paving and landscaping at complete outdoor transformation in Collinstown, Westmeath"
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