import Link from "next/link";
import ScrollingBackground from "./components/ScrollingBackground";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Joe Matthews Landscaping & Paving',
  description: 'Joe Matthews Landscaping & Paving is a family-owned landscaping company based in Castletown, Co. Meath, Ireland. We specialize in landscape design and construction for both residential and commercial clients, offering services such as garden design, paving, patios, and more in Meath, Dublin, Cavan, Louth.',
}

export default function Home() {
  return (
    <div className="pt-32 bg-[#E8E8E8] flex flex-col items-center justify-center scroll-auto">
      <ScrollingBackground />
      <div className="px-6 md:px-36 py-12 flex flex-col justify-center w-[80%]">
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-gray-800 max-w-4xl mb-8">
          We are a Garden Design/Build Company
        </h1>

        <div className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Joe Matthews Landscaping & Paving specialise in landscape and garden design as well as patio and paving for both private and commercial clients throughout Ireland. We have been satisfying the needs of our individual clientele across North Leinster for over 20 years. During this time, Joe Matthews Landscaping & Paving have amassed a reputation for the excellence of our completed works along with the quality of our customer service. We are a fully owned Irish company and we pride ourselves on leaving our customers with a professional finish whilst remaining competitively priced.
        </div>

        <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
          From intimate urban courtyards to expansive rural estates, our team approaches each project with sensitivity to its context and a passion for craftsmanship. Whether you're dreaming of a serene garden retreat, a welcoming front path, or a custom stone patio, Joe Matthews Landscaping & Paving blends natural beauty with functional design to elevate outdoor living across Ireland.
        </div>
      </div>

      <div className="flex flex-col items-center justify-between pb-6">
        <h1 className="text-5xl md:text-5xl font-serif tracking-tight leading-tight text-gray-800">Our Services</h1>
        <div className="flex flex-col items-center justify-center mt-6 gap-8">
          <Link href={'/landscaping'}>
            <div className={`bg-[url('/domestic_4.jpg')] md:w-[70vw] w-[75vw] md:h-[60vh] h-[40vh]
              bg-cover bg-center
              rounded-3xl
              flex items-center justify-center
              text-white text-5xl font-bold
              hover:opacity-90 transition-all duration-500
              shadow-2xl`}>
                Landscaping
              </div>
          </Link>
          <Link href={'/paving'}>
            <div className={`bg-[url('/mainImages/mainpaving.jpg')] w-[75vw] md:w-[70vw] md:h-[60vh] h-[40vh]
              bg-cover bg-center
              rounded-3xl
              flex items-center justify-center
              text-white text-5xl font-bold
              hover:opacity-90 transition-all duration-500
              shadow-2xl`}>
                Paving
              </div>
          </Link>
          <Link href={'/patios'}>
            <div className={`bg-[url('/dunshauglingazebo/IMG_5118.jpg')] w-[75vw] md:w-[70vw] md:h-[60vh] h-[40vh]
              bg-cover bg-center
              rounded-3xl
              flex items-center justify-center
              text-white text-5xl font-bold
              hover:opacity-90 transition-all duration-500
              shadow-2xl`}>
                Patios
              </div>
          </Link>
          <Link href={'/walling'}>
            <div className={`bg-[url('/dunshauglingazebo/IMG_5107.jpg')] w-[75vw] md:w-[70vw] md:h-[60vh] h-[40vh]
              bg-cover bg-center
              rounded-3xl
              flex items-center justify-center
              text-white text-5xl font-bold
              hover:opacity-90 transition-all duration-500
              shadow-2xl`}>
                Walling
              </div>
          </Link>
          <Link href={'/gazebos'}>
            <div className={`bg-[url('/ourgazebo/IMG_8691.jpg')] w-[75vw] md:w-[70vw] md:h-[60vh] h-[40vh]
              bg-cover bg-center
              rounded-3xl
              flex items-center justify-center
              text-white text-5xl font-bold
              hover:opacity-90 transition-all duration-500
              shadow-2xl`}>
                Gazebos
              </div>
          </Link>
          <Link href={'/waterfeatures'}>
            <div className={`bg-[url('/waterfall.jpg')] w-[75vw] md:w-[70vw] md:h-[60vh] h-[40vh]
              bg-cover bg-center
              rounded-3xl
              flex items-center justify-center
              text-white text-5xl font-bold
              hover:opacity-90 transition-all duration-500 text-center
              shadow-2xl`}>
                Water Features
              </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
