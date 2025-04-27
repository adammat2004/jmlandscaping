import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Landscaping Services | Joe Matthews Landscaping & Paving',
  description: 'Transform your outdoor space with professional garden landscaping services across Meath, Dublin, and Louth. From garden design to full landscape construction, Joe Matthews Landscaping delivers stunning, functional results tailored to your needs.',
}


const page = () => {
  return (
    <div>
      <div className="pt-72 bg-[#E8E8E8] min-h-screen px-6 md:px-16">
        <div className="text-2xl md:text-3xl font-serif text-[#355E3B] text-center mb-12">
          CLICK ON IMAGES BELOW TO VIEW PROJECT DETAILS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16">
          <div className="flex flex-col items-center text-center">
            <Link href="/landscaping/commerciallandscaping" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/paving2/IMG-4669.jpg"
                  alt="commercial paving"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Commerial Landscaping Project
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/landscaping/patiogazebo" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dunshauglingazebo/IMG_5112.jpg"
                  alt="Patio and Gazebo"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Patio and Gazebo
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/landscaping/commercial2" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/landscaping2/frontimage.jpg"
                  alt="Garden Planting"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Commercial Planting & Paving
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/landscaping/moderngarden" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/donaghpatrick/IMG-2039.jpg"
                  alt="Garden Planting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className='object-center'
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Modern Garden
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
