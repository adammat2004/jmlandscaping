import React from 'react'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='bg-[#E8E8E8]] pt-72'>
        <div className="bg-[#E8E8E8] px-6 md:px-16 min-h-screen">
            <h1 className="text-4xl font-serif text-[#355E3B] mb-4">About Joe Matthews Landscaping</h1>
            <div className="text-xl text-gray-700 mb-8">
                Established over two decades ago, Joe Matthews Landscaping & Paving has become a trusted name in landscape design and construction 
                throughout Meath, Dublin, Kildare, Louth, and Cavan. Based in Castletown Kilpatrick, Co. Meath, our family-owned business has built a reputation for delivering high-quality, 
                bespoke landscaping solutions for both residential and commercial clients. Our commitment to excellence is reflected in our membership 
                with the Association of Landscape Contractors of Ireland (ALCI), ensuring that every project meets the highest industry standards.
            </div>

            <h1 className="text-4xl font-serif text-[#355E3B] mb-4">Our Services</h1>
            <div className="text-xl text-gray-700 mb-8">
                <div className="mb-4">We offer a comprehensive range of landscaping services tailored to meet the unique needs of each client. Our expertise includes:</div>
                <ul className="list-disc pl-6">
                    <li className="mb-2">Domestic Landscaping: From garden design and planting to patio and driveway installations, we transform outdoor spaces into functional and beautiful areas for relaxation and entertainment.</li>
                    <li className="mb-2">Commercial Landscaping: We provide landscaping solutions for businesses, public spaces, and local authorities, enhancing the aesthetic appeal and functionality of commercial properties.</li>
                    <li className="mb-2">Patios & Paving: Specializing in brick paving, natural stone paving, and timber decking, we create durable and stylish outdoor surfaces that complement your property's design.</li>
                </ul>
            </div>

            <h1 className="text-4xl font-serif text-[#355E3B] mb-4">Why Choose Us</h1>
            <div className="text-xl text-gray-700 mb-8">
                At Joe Matthews Landscaping & Paving, we pride ourselves on our professionalism, reliability, and attention to detail. 
                We source high-quality materials from leading Irish and international manufacturers to ensure a superior finish for every project. 
                Our fully qualified and insured team is dedicated to delivering results that exceed expectations, all while maintaining competitive pricing.
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default page
