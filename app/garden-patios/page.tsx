import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Patio Design & Installation | Joe Matthews Landscaping & Paving',
  description: 'Expert patio design and installation services across Meath, Dublin, and Louth. Joe Matthews Landscaping delivers bespoke patios using high-quality materials, tailored to your outdoor living needs.',
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
            <Link href="/garden-patios/granite-patio-louth" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/patio1/IMG-1734.jpg"
                  alt="Small Garden Patio"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Townhouse Patio
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/garden-patios/patio-gazebo-meath" className="w-full">
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
            <Link href="/garden-patios/granite-patio-meath" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/patio3/IMG_8576.jpg"
                  alt="patio"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Circular Patio
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/garden-patios/granite-patio-dublin" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/patio4/IMG_8075.jpg"
                  alt="granite patio and granite steps in Dublin"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Patio & Steps
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/garden-patios/porcelain-patio-meath" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/patio5/IMG_7905.jpg"
                  alt="porcelain patio in Meath"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Porcelain Patio
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
