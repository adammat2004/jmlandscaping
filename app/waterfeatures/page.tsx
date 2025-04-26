import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Water Features & Garden Ponds | Joe Matthews Landscaping',
  description: 'Create a tranquil garden with custom water features, including ponds, waterfalls, and streams. Serving Meath, Dublin, and Louth, Joe Matthews Landscaping designs and installs stunning water elements that enhance any outdoor space.',
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
            <Link href="/waterfeatures/naturalpond" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/waterfall1/IMG-1965.jpg"
                  alt="Garden Planting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className=''
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Pond & Patio
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="/waterfeatures/tranquilpond" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/waterfall2/mainimage.jpg"
                  alt="Patio and Gazebo"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Tranquil Pond
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
