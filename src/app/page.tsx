
// app/page.tsx
// components/Header.tsx
'use client'
import { useEffect, useState } from 'react'
import {  MessageCircle  } from 'lucide-react'
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Hexagon 
} from 'lucide-react'
import React from 'react';
import { Header } from './components/Header';
import { CompanyFooter } from './components/CompanyFooter';


const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      {/* Main container */}
      <div className="text-center">
        {/* Logo with animation */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Animated logo blocks */}
            <div className="relative">
              <div className="w-12 h-12 bg-teal-600 rounded-lg animate-pulse transform rotate-12"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-lg animate-bounce transform -rotate-12"></div>
            </div>
          </div>
          
          {/* Company name */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            GOLDK-TECH.
          </h1>
          <p className="text-gray-600 text-lg">
            Technology Solutions
          </p>
        </div>

        {/* Loading spinner */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
        </div>

        {/* Loading text */}
        <p className="text-gray-500 mt-4 text-sm animate-pulse">
          Loading...
        </p>
      </div>

      {/* Optional: Progress bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div className="bg-teal-600 h-1 rounded-full animate-pulse" style={{
            animation: 'progressBar 2s ease-in-out forwards'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}




const HeroSection = () => {
  return (
    <section id="home" className="min-h-[70vh] items-center flex justify-center py-10 mt-15 relative overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('bg.jpg')`,
          'backgroundAttachment': 'fixed',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat',
          'backgroundSize': 'cover',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Rest of your hero content remains the same */}
      <div className="relative z-10  flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Your existing hero content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-white rounded-lg overflow-hidden">
            <div className="px-8 py-6 bg-teal-900/90 mb-5 md:px-12 md:py-9 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text5xl font-bold leading-tight">
                Connecting Your Business with<br />
                Effective Solutions
              </h1>
            </div>
            <div className="px-8 py-4 md:px-12 md:py-4 bg-teal-600/80 bg-opacity-80">
              <p className="text-sm md:text-lg leading-relaxed text-center max-w-5xl mx-auto">
                Our central goal is to help execute innovation for business use along these lines 
                assisting our customers with overseeing change through top-notch, financially 
                savvy, basic and commonsense arrangements. Our accomplished and ensured engineers 
                offer support and backing for the most recent stages and innovations, to benefit 
                as much as possible from your current speculation.
              </p>
            </div>
            <div className="text-center mt-12">
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-3 mx-auto text-lg font-semibold">
                <MessageCircle size={24} />
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: "Remote Management Services",
      description: "PC Solutions offers far off IT foundation the board administrations with lie all around the world perceived ISO 9001, ISO 20000, ISO 27001, and CMMI3 confirmed tasks."
    },
    {
      icon: <Shield size={40} className="text-blue-600" />,
      title: "Network Security",
      description: "Standard purpose of administration security arrangements are exceptionally hard to foundation, update, and oversee. This can prompt complex activities and an expansion to overhead cost."
    },
    {
      icon: <Cloud size={40} className="text-blue-600" />,
      title: "Cloud IT Solutions",
      description: "Organizations are beginning to use distributed computing in higher focuses. The ongoing blast in the capabilities of utility processing in the cloud presents."
    },
    {
      icon: <Database size={40} className="text-blue-600" />,
      title: "DevOps Services",
      description: "We accept good thoughts merit extraordinary usage. We guarantee this by conveying strength, dependability, and cost-proficiency of DevOps Services to organizations in India and around the worldwide."
    },
    {
      icon: <Lock size={40} className="text-blue-600" />,
      title: "IT Security & Compliance",
      description: "Clear Technologies gives security and consistence counseling administrations. With countless dangers, apparatuses, cautions and dread driving the security commercial center."
    },
    {
      icon: <Hexagon size={40} className="text-blue-600" />,
      title: "IT Consulting",
      description: "With IT prerequisites advancing at a fast movement, organizations need enduring answers for help a developing climate."
    }
  ]

  return (
 <section id="services" className="py-20 bg-gray-50">
      {/* Your existing content remains the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
            Welcome to Business Consulting Company
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed italic">
            From customer commitment to innovation execution to support conveyance, 
            our IT Solutions and Services give you admittance to our capability in trend 
            setting innovations and demonstrated practices along the whole IT life cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-700 leading-relaxed max-w-6xl mx-auto">
            <span className="font-semibold text-gray-800">GOLDK-TECH</span> provides application maintenance and support at varying levels to meet your exact needs. We manage applications built using a wide variety of technologies. Our services include pro-active monitoring, root-cause analysis, preventative maintenance, service continuity and continuous improvement in the stability and availability of applications.
          </p>
        </div>
      </div>
    </section>
  )
}

const ITChallengesSection = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[500px]">
        {/* Mobile: Content first, Desktop: Image first */}
        <div className="order-2 lg:order-1 relative overflow-hidden min-h-[300px] lg:min-h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('business.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            
          </div>
          
          {/* Fallback gradient if no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-center">
              <img src="business.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 bg-teal-600 text-white flex items-center">
          <div className="p-6 sm:p-8 lg:p-12 xl:p-16 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
              IT and business challenges
            </h2>
            
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 opacity-95">
              GOLDK-TECH solutions and services deliver innovative solutions, allowing clients 
              to embrace the technologies that stimulate their companies future growth. We 
              build innovative IT infrastructure solution and support services, along with 
              application and security services using both cloud and traditional technologies, 
              combined with collective business, technical and industry expertise. From 
              client engagement to technology implementation to service delivery, we give 
              you access to our proficiency in advanced technologies and proven practices 
              along the entire IT life cycle.
            </p>

            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center gap-3 font-semibold group w-full sm:w-auto justify-center sm:justify-start">
              <MessageCircle size={20} className="group-hover:text-teal-600 transition-colors" />
              TALK TO US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}





export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  // Show loader while loading
  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
        <main>
          <Header />
          <HeroSection />
          <ServicesSection />
          <ITChallengesSection />
          <CompanyFooter />
        </main>
    </div>
  )
}