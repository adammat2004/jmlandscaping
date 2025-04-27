import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Paving Services in Meath, Dublin & Louth | Joe Matthews Landscaping',
  description: 'Expert paving services for driveways, patios, and gardens across Meath, Dublin, and Louth. Joe Matthews Landscaping delivers durable, high-quality paving using top materials and precision craftsmanship.',
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
            <Link href="/paving/commercialpaving" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/paving2/IMG-4669.jpg"
                  alt="paving 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Commercial Paving Project
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/paving/circlepaving" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/paving3/frontimage.jpg"
                  alt="Paved Circular Back Garden"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Circular Paving
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/paving/gardenpath" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/paving5/mainimage.jpg"
                  alt="Garden Path"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Garden Path
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/paving/pavingsteps" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/paving4/frontimage.jpg"
                  alt="Paving & Steps"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Paving & Steps
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/paving/pavedgarden" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/paving1/IMG_7696.jpg"
                  alt="Garden Planting"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Paved Back Garden
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
