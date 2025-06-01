import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Our Projects | Joe Matthews Landscaping & Paving',
  description: 'Explore real landscaping projects by Joe Matthews Landscaping across Meath, Dublin, and Louth. See our patios, driveways, garden designs, and water features — quality craftsmanship and attention to detail in every project.',
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
            <Link href="/full-service-landscaping-paving-meath" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/newjob/pic_2.jpg"
                  alt="Landscaping and Paving Project"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Full Outdoor Transformation
            </div>
          </div>
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
          <div className="flex flex-col items-center text-center">
            <Link href="/gazebos/gazebopatio" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dunshauglingazebo/IMG_5118.jpg"
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
            <Link href="/gazebos/bbqarea" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/gazebo3/IMG-7632.jpg"
                  alt="gazebo"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Paved BBQ Area
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

          <div className="flex flex-col items-center text-center">
            <Link href="/patios/circularpatio" className="w-full">
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
            <Link href="/patios/patiosteps" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/patio4/IMG_8075.jpg"
                  alt="steps"
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
            <Link href="/patios/porcelainpatio" className="w-full">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <Image
                  src="/patio5/IMG_7905.jpg"
                  alt="limestone"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className="mt-4 text-lg text-[#355E3B] font-medium">
              Porcelain Patio
            </div>
          </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
