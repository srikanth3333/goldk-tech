'use client'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown  } from 'lucide-react'
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
