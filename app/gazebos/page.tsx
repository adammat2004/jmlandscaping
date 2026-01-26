import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Custom Gazebo Design & Installation | Joe Matthews Landscaping & Paving',
  description: 'Explore our stunning gazebo projects, including BBQ areas and outdoor spa designs. We design and build custom gazebos across Dublin, Meath & Louth to enhance your outdoor living space.',
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
            <Link href="/gazebos/gazebospa" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/ourgazebo/IMG_8691.jpg"
                  alt="Gazebo spa"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Barbeque & Outdoor Spa Area Gazebo
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/gazebos/custom-gazebo-meath" className="w-full">
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
            <Link href="/gazebos/bbqarea" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/gazebo3/IMG-7632.jpg"
                  alt="gazebo"
                  fill
                  style={{ objectFit: 'cover' }}
                  className='object-cover'
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Paved BBQ Area
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/gazebos/parkbeo" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/parkbeo/IMG-5746.jpg"
                  alt="gazebo"
                  fill
                  style={{ objectFit: 'cover' }}
                  className='object-center'
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Park Beo
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
