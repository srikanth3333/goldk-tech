
// app/page.tsx
// components/Header.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, MessageCircle, ChevronDown  } from 'lucide-react'
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Hexagon 
} from 'lucide-react'
import React from 'react';
import Link from 'next/link';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Services list
  const services = [
    { name: 'Remote Management Services', href: '#services' },
    { name: 'Network Security', href: '#services' },
    { name: 'Cloud IT Solutions', href: '#services' },
    { name: 'DevOps Services', href: '#services' },
    { name: 'IT Security & Compliance', href: '#services' },
    { name: 'IT Consulting', href: '#services' }
  ]

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/about', label: 'Services', hasDropdown: true },
    { href: '/contact', label: 'Contact Us' }
  ]

  // Handle services dropdown hover
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150) // Small delay to prevent flickering
  }

  // Close menu when clicking on a link (for mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  // Handle mobile services toggle
  const handleMobileServicesToggle = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <div className="text-2xl font-bold text-teal-600">
                GOLDK-TECH.
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <div
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <button className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium flex items-center gap-1">
                        {link.label}
                        <ChevronDown
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Services Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                          isServicesOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Sliding Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-2xl font-bold text-teal-600">
              GOLDK-TECH.
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    {/* Services Toggle Button */}
                    <button
                      onClick={handleMobileServicesToggle}
                      className={`w-full px-6 py-4 text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 border-l-4 border-transparent hover:border-teal-600 flex items-center justify-between transform transition-transform duration-200 ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Mobile Services Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          onClick={handleLinkClick}
                          className="block px-10 py-3 text-base text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors duration-200 border-l-4 border-transparent hover:border-teal-400"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`px-6 py-4 text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 border-l-4 border-transparent hover:border-teal-600 transform transition-transform duration-200 block ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Optional: Additional content in mobile menu */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
            <div className="text-sm text-gray-500 text-center">
              © 2024 GOLDK-TECH. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
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

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface Service {
  name: string;
}

interface CompanyFooterProps {
  contactInfo?: ContactInfo;
  services?: Service[];
  aboutText?: string;
}

export const CompanyFooter: React.FC<CompanyFooterProps> = ({
  contactInfo = {
    address: "6 Belle Vue place Belle Vue Road Sudbury Suffolk CO10 2PQ",
    phone: "+44 7586653668",
    email: "GOLDK-TECH@gmail.com"
  },
  services = [
    { name: "Remote Management Services" },
    { name: "Network Security" },
    { name: "Cloud IT Solutions" },
    { name: "DevOps Services" },
    { name: "IT Security & Compliance" },
    { name: "IT Consulting" }
  ],
  aboutText = "GOLDK-TECH is a fast growing, technology driven company providing various services in the field of Information Technology......"
}) => {
  return (
    <footer className="bg-white py-22 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact Us</h3>
            
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-xs"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-800">GOLDK-TECH.</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <p className="text-blue-600 hover:text-blue-800 transition-colors">
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-6">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-6">About us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default function Home() {
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