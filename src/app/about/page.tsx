'use client'
import React from 'react'
import { CompanyFooter, Header } from '../page'
import Image from 'next/image';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({
  title = "About Us",
  description = "GOLDK-TECH is a fast-growing, technology-driven company providing various services in the field of Information Technology. It has been providing high quality IT and Management Services to various customers across the globe. The team at GOLDK-TECH is talented and has great experience in working with uk customers and in providing quality software and Management services in the field of Information Technology and Management Services. GOLDK-TECH is a Software Development and Consulting Company with offices in the UK. Founded by executives from some of the world's foremost IT organizations. GOLDK-TECH has the unique ability to provide Uk management and support coupled with highly qualified technical resources and great value.",
  buttonText = "Let's Talk",
  onButtonClick = () => console.log('Let\'s Talk clicked')
}) => {
  return (
    <section className="relative bg-gray-50 py-18 mt-10 px-6 overflow-hidden">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 w-full h-20 bg-teal-500 transform -skew-y-1 origin-top-left"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {description}
            </p>
            
            <button
              onClick={onButtonClick}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              {buttonText}
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center items-center relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Light pink circle */}
              <div className="w-80 h-80 bg-pink-100 rounded-full opacity-50"></div>
            </div>
            
            {/* Orange plus sign */}
            <div className="absolute top-16 left-20 text-orange-400 text-4xl font-bold">+</div>
            
            {/* Business people illustration */}
            <div className="relative z-10 flex space-x-4">
              {/* Person 1 - Business man with chart */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Chart icon */}
                  <svg className="w-8 h-8 text-orange-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  {/* Business person */}
                  <div className="w-16 h-20 bg-blue-600 rounded-t-full mx-auto"></div>
                  <div className="w-20 h-24 bg-gray-800 rounded-lg mx-auto -mt-2"></div>
                  <div className="w-8 h-16 bg-blue-400 rounded-lg mx-auto -mt-2"></div>
                </div>
              </div>

              {/* Person 2 - Business woman with lightbulb */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Lightbulb icon */}
                  <svg className="w-8 h-8 text-yellow-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                  </svg>
                  {/* Business person */}
                  <div className="w-16 h-20 bg-amber-100 rounded-t-full mx-auto"></div>
                  <div className="w-20 h-24 bg-gray-800 rounded-lg mx-auto -mt-2"></div>
                  <div className="w-8 h-16 bg-gray-600 rounded-lg mx-auto -mt-2"></div>
                </div>
              </div>

              {/* Person 3 - Business man with growth chart */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Growth chart icon */}
                  <svg className="w-8 h-8 text-blue-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  {/* Business person */}
                  <div className="w-16 h-20 bg-amber-200 rounded-t-full mx-auto"></div>
                  <div className="w-20 h-24 bg-amber-600 rounded-lg mx-auto -mt-2"></div>
                  <div className="w-8 h-16 bg-amber-800 rounded-lg mx-auto -mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

interface OurStoryProps {
  title?: string;
  description1?: string;
  description2?: string;
  contactInfo?: ContactInfo;
  imageUrl?: string;
  imageAlt?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  title = "Our Story",
  description1 = "Our development team is comprised of experts in .Net, Java technologies, ERP Applications [Oracle, SAP, Peoplesoft], projects management and development methodologies. Mostly we focused on Mobile apps and service-oriented web projects and marketing for various projects form our team. Our team believes in providing superior customer service. We have developed a fantastic portfolio of products and solutions.",
  description2 = "Our innovative business design is meant to retain the intuitive technology design and solutioning competitiveness in each one of our focus areas independently as a Practice and yet in a collective, integrated manner for End to End capability as an organization. This makes our Practices remain at the edge of technology solutions and competitiveness for our customers to experience Digital as it should be. GOLDK-TECH blends emerging IT technologies and management consulting to help fast-growing companies achieve bottom-line improvement. We focus on identifying and attracting new technology and new professionals for internet & digital media services, start-ups & emerging technology-based customer requirements.",
  contactInfo = {
    location: "6 Belle Vue place Belle Vue Road Sudbury Suffolk CO10 2PQ",
    email: "GOLDK-TECH@gmail.com",
    phone: "+44 7586653668"
  },
  imageUrl = "/team-meeting.jpg", 
  imageAlt = "Team meeting in modern office"
}) => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image and Contact Info */}
          <div className="space-y-8">
            {/* Team Image */}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Location:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {contactInfo.location}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Email:</h4>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone:</h4>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Title with underline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                {title}
              </h2>
              <div className="w-16 h-1 bg-orange-400"></div>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-6">
              <p className="text-gray-700 text-base leading-relaxed">
                {description1}
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                {description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


function page() {
  return (
    <div>
        <main>
            <Header />
            <AboutUs />
            <OurStory />
            <CompanyFooter />
        </main>
    </div>
  )
}

export default page
