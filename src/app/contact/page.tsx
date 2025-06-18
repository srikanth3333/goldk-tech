'use client'
import React, { useState } from 'react'
import { Header } from '../components/Header';
import { CompanyFooter } from '../components/CompanyFooter';
interface ContactHeaderProps {
  title?: string;
  subtitle?: string;
  lineColor?: string;
  className?: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  title = "Contact Us",
  subtitle = "General Inquiries",
  lineColor = "border-white/30",
  className = ""
}) => {
  return (
    <section className={`relative bg-gradient-to-b from-teal-600 to-teal-900 py-20 px-6 mt-10 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative line */}
        <div className={`w-32 h-px ${lineColor} mx-auto mb-8`}></div>
        
        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface GetInTouchProps {
  title?: string;
  subtitle?: string;
  description?: string;
  onSubmit?: (data: ContactFormData) => void;
  showMockup?: boolean;
  className?: string;
}


interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface GetInTouchProps {
  title?: string;
  subtitle?: string;
  description?: string;
  onSubmit?: (data: ContactFormData) => void;
  showMockup?: boolean;
  className?: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  title = "Get In Touch With Us",
  subtitle = "For General Questions & Support",
  description = "Whether you're looking for IT management services, IT consulting, or custom remote management services we're here to help. Contact us today to learn what it's like to work with our team of IT support specialists and how we can help your business succeed.",
  onSubmit,
  showMockup = true,
  className = ""
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - you can replace this with your actual form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
      }
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`bg-gray-50 py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              {/* Decorative line */}
              <div className="w-16 h-px bg-gray-400 mx-auto lg:mx-0 mb-6"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {title}
              </h2>
              
              <p className="text-gray-600 text-lg">
                {subtitle}
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors placeholder-gray-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors placeholder-gray-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors placeholder-gray-400 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Right side - Content with Phone Mockup */}
          <div className="space-y-8">
            {showMockup && (
              <div className="relative">
                {/* Phone Mockup */}
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  {/* Phone Frame */}
                  <div className="bg-white rounded-3xl shadow-2xl p-2 border-8 border-gray-200">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden">
                      {/* Screen Content */}
                      <div className="bg-gradient-to-br from-teal-400 to-teal-600 h-64 flex items-center justify-center relative">
                        {/* App Interface Mockup */}
                        <div className="text-center text-white space-y-4">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-white/30 rounded w-32 mx-auto"></div>
                            <div className="h-3 bg-white/30 rounded w-24 mx-auto"></div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-3 w-40 mx-auto">
                            <div className="h-2 bg-white/40 rounded w-full mb-2"></div>
                            <div className="h-2 bg-white/40 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="bg-gray-900 h-8 flex items-center justify-center">
                        <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Team Image */}
                <div className="absolute -top-8 -right-8 w-48 h-32 rounded-lg overflow-hidden shadow-lg hidden lg:block">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center">
                    {/* Team illustration placeholder */}
                    <svg className="w-20 h-20 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Description Text */}
            <div className="text-center lg:text-left">
              <p className="text-gray-700 text-base leading-relaxed">
                {description}
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
            <ContactHeader />
            <GetInTouch />
            <CompanyFooter />
        </main>
    </div>
  )
}

export default page
