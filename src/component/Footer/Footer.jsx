import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#F5F5F5] pt-16 pb-10 px-4 md:px-12 border-t-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - Company */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#FFD700] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#FFD700]">
              Company
            </h3>
            <ul className="space-y-3 text-[#EEEEEE]">
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#FFD700] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#FFD700]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[#EEEEEE]">
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Get in Touch</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Help center</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Live chat</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">How it works</a></li>
            </ul>
          </div>

          {/* Column 3 - Our Brands */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#FFD700] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#FFD700]">
              Our Brands
            </h3>
            <ul className="space-y-3 text-[#EEEEEE]">
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Toyota</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Porsche</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Audi</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">BMW</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Ford</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Nissan</a></li>
            </ul>
          </div>

          {/* Column 4 - Vehicles Type */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#FFD700] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#FFD700]">
              Vehicles Type
            </h3>
            <ul className="space-y-3 text-[#EEEEEE]">
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Sedan</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Hatchback</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">SUV</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Hybrid</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Electric</a></li>
            </ul>
          </div>

          {/* Column 5 - Sale Hours & Social */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#FFD700] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#FFD700]">
              Sale Hours
            </h3>
            <div className="space-y-3 text-[#EEEEEE] mb-8">
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#FFD700] rounded-full mt-1.5 mr-2"></span>
                Monday – Friday: 09:00AM – 09:00 PM
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#FFD700] rounded-full mt-1.5 mr-2"></span>
                Saturday: 09:00AM – 07:00PM
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#FFD700] rounded-full mt-1.5 mr-2"></span>
                Sunday: Closed
              </p>
            </div>

            <h3 className="font-bold text-xl mb-4 text-[#FFD700] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#FFD700]">
              Connect With Us
            </h3>
            <div className="flex gap-4 text-lg">
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#333333] rounded-full flex items-center justify-center hover:bg-[#FFAB00] transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#333333] rounded-full flex items-center justify-center hover:bg-[#FFAB00] transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#333333] rounded-full flex items-center justify-center hover:bg-[#FFAB00] transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#333333] rounded-full flex items-center justify-center hover:bg-[#FFAB00] transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#616161] text-center text-[#9E9E9E] text-sm">
          <p>© {new Date().getFullYear()} Bahaa. All rights reserved.</p>
          <p className="mt-2">Designed By <span className="text-[#FFD700]">♥</span> BAHAA </p>
        </div>
      </div>
    </footer>
  )
}