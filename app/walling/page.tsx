import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Garden Walling | Joe Matthews Landscaping & Paving',
  description: 'Professional walling services for garden walls, retaining walls, and boundary walls in Meath, Dublin, and Louth. Joe Matthews Landscaping creates durable, beautifully crafted walls to enhance your outdoor spaces.',
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
            <Link href="/walling/fencedwalling" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/walling2/IMG-1259.jpg"
                  alt="Garden Planting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className='object-top'
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Walling & Fencing
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/landscaping-services/patiogazebo" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dunshauglingazebo/IMG_5112.jpg"
                  alt="Patio and Gazebo"
                  fill
                  style={{ objectFit: 'cover' }}
                  className=''
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Patio and Gazebo
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/walling/patiowalling" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/walling1/IMG-0148.jpg"
                  alt="Garden Planting"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Patio with Walling
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
