import React from 'react'

export default function Contact() {
  return <>
<section className="relative min-h-screen bg-[#F5F5F5] text-[#333333] pt-32 pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    
    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold mb-4 text-[#333333]">Get In Touch</h2>
      <p className="text-[#9E9E9E] max-w-xl mx-auto">
        We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Contact Info */}
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <i className="fas fa-map-marker-alt text-2xl text-[#FFD700] mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold text-[#333333]">Address</h4>
            <p className="text-[#616161]">123 Main St, Alexandria, Egypt</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <i className="fas fa-phone-alt text-2xl text-[#FFD700] mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold text-[#333333]">Phone</h4>
            <p className="text-[#616161]">+20 111 222 3333</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <i className="fas fa-envelope text-2xl text-[#FFD700] mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold text-[#333333]">Email</h4>
            <p className="text-[#616161]">contact@yourdomain.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-[#EEEEEE]">
        <div>
          <label className="block text-sm font-semibold mb-1 text-[#333333]">Name</label>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-[#F5F5F5] text-[#333333] border border-[#EEEEEE] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-[#333333]">Email</label>
          <input 
            type="email" 
            placeholder="you@example.com" 
            className="w-full bg-[#F5F5F5] text-[#333333] border border-[#EEEEEE] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-[#333333]">Message</label>
          <textarea 
            rows="4" 
            placeholder="Write your message..." 
            className="w-full bg-[#F5F5F5] text-[#333333] border border-[#EEEEEE] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

    </div>
  </div>
</section>
  </>
}