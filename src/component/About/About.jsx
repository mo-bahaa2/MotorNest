import React from "react";
import main from "../../../public/contact us.jpg";
import person1 from '../../../public/Container (1).png'
import person2 from '../../../public/Container (2).png'
import person3 from '../../../public/Container.png'
import person4 from '../../../public/team4.jpg.png'

export default function About() {
  return (
    <div className="text-[#333333]">

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white mb-4">
        <img
          src={main}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD700]">We Make Finding The Right Car Simple</h1>
          <p className="text-[#FFF9C4]">
            <span className='text-[#FFEE58]'>Home</span>
            <i className="fa-solid fa-angle-right mx-1.5 text-[#FFD600]"></i>
            About Us
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F5F5F5] text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-[#FFD700]"><i className="fa-solid fa-hand-holding-dollar"></i></div>
            <h3 className="font-semibold mb-2">Special Financing Offers</h3>
            <p className="text-sm text-[#616161]">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-[#FFD700]"><i className="fa-solid fa-car"></i></div>
            <h3 className="font-semibold mb-2">Trusted Car Dealership</h3>
            <p className="text-sm text-[#616161]">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-[#FFD700]"><i className="fa-solid fa-tags"></i></div>
            <h3 className="font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-sm text-[#616161]">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-[#FFD700]"><i className="fa-solid fa-screwdriver-wrench"></i></div>
            <h3 className="font-semibold mb-2">Expert Car Service</h3>
            <p className="text-sm text-[#616161]">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="md:flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">What our customers say</h2>
            <p className="text-sm text-[#616161]">
              Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-[#F5F5F5] p-5 rounded-xl shadow hover:shadow-md transition border border-[#EEEEEE]">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#FFD700] flex gap-1 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="text-[#9E9E9E] text-xs flex items-center gap-1">
                  <i className="fas fa-check-circle text-[#1976D2]"></i>
                  <span>Verified</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm mb-1">Sales process was simple and easy</h4>
              <p className="text-xs text-[#616161] mb-3">Sales process was simple and easy. Maximillion was friendly and I didn't feel...</p>
              <p className="text-xs text-[#333333] font-medium">Ali Tufan</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F5F5] p-5 rounded-xl shadow hover:shadow-md transition border border-[#EEEEEE]">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#FFD700] flex gap-1 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="text-[#9E9E9E] text-xs flex items-center gap-1">
                  <i className="fas fa-check-circle text-[#1976D2]"></i>
                  <span>Verified</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm mb-1">Good job for project</h4>
              <p className="text-xs text-[#616161] mb-3">Sales process was simple and easy. Maximillion was friendly and I didn't feel...</p>
              <p className="text-xs text-[#333333] font-medium">John Doe</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F5F5] p-5 rounded-xl shadow hover:shadow-md transition border border-[#EEEEEE]">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#FFD700] flex gap-1 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="text-[#9E9E9E] text-xs flex items-center gap-1">
                  <i className="fas fa-check-circle text-[#1976D2]"></i>
                  <span>Verified</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm mb-1">Sales process was simple and easy</h4>
              <p className="text-xs text-[#616161] mb-3">At Voiture what matters to us is making your car search and buying.</p>
              <p className="text-xs text-[#333333] font-medium">Brooklyn Simmons</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F5F5F5] p-5 rounded-xl shadow hover:shadow-md transition border border-[#EEEEEE]">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#FFD700] flex gap-1 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="text-[#9E9E9E] text-xs flex items-center gap-1">
                  <i className="fas fa-check-circle text-[#1976D2]"></i>
                  <span>Verified</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm mb-1">Good job for project</h4>
              <p className="text-xs text-[#616161] mb-3">Sales process was simple and easy. Maximillion was friendly and I didn't feel...</p>
              <p className="text-xs text-[#333333] font-medium">Augusta Silva</p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-[#F5F5F5] text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition delay-150 duration-300 ease-in-out mx-11 md:mx-0 border border-[#EEEEEE]">
            <img src={person2} alt="Courtney Henry" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Courtney Henry</h4>
              <p className="text-sm text-[#616161]">Development Manager</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition delay-150 duration-300 ease-in-out mx-11 md:mx-0 border border-[#EEEEEE]">
            <img src={person1} alt="Jerome Bell" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Jerome Bell</h4>
              <p className="text-sm text-[#616161]">Software Tester</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition delay-150 duration-300 ease-in-out mx-11 md:mx-0 border border-[#EEEEEE]">
            <img src={person3} alt="Arlene McCoy" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Arlene McCoy</h4>
              <p className="text-sm text-[#616161]">Software Developer</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition delay-150 duration-300 ease-in-out mx-11 md:mx-0 border border-[#EEEEEE]">
            <img src={person4} alt="Jenny Wilson" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Jenny Wilson</h4>
              <p className="text-sm text-[#616161]">UI/UX Designer</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}