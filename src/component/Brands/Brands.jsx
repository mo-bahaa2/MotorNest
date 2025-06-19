import React from 'react';
import { motion } from 'framer-motion';
import main from '../../../public/5-Benefits-of-Buying-A-Pre-Owned-Luxury-Car.jpg';

const brandLogos = [
  'audi-logo.png',
  'bmw-logo-2020-gray.png',
  'byd-logo.png',
  'changan-logo.png',
  'chery-logo.png',
  'chevrolet-logo.png',
  'daimler-logo.png',
  'ferrari-logo.png',
  'fiat-logo.png',
  'ford-logo.png',
  'ford-mustang-logo.png',
  'geely-logo.png',
  'geometry-logo.png',
  'holden-logo.png',
  'honda-logo.png',
  'hyundai-logo.png',
  'jeep-logo.png',
  'kenworth-logo.png',
  'kia-logo.png',
  'mansory-logo.png',
  'mercedes-benz-logo.png',
  'mg-logo.png',
  'mini-logo.png',
  'mitsubishi-logo.png',
  'nissan-logo.png',
  'opel-logo.png',
  'perodua-logo.png',
  'porsche-logo.png',
  'ram-logo.png',
  'renault-logo.png',
  'rezvani-logo.png',
  'rover-logo.png',
  'seat-logo.png',
  'skoda-logo.png',
  'subaru-logo.png',
  'suzuki-logo.png',
  'tesla-logo.png',
  'toyota-logo.png',
  'volkswagen-logo (1).png',
  'brammo-logo.png',
  '9ff-logo.png',
  'dina-logo.png'
];

const BrandCard = ({ logo, brandName, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      borderColor: "#FFD700"
    }}
    className="bg-white border border-[#EEEEEE] rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD70010] to-[#FFAB0010] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10 w-full">
      <img
        src={`/brands/${logo}`}
        alt={brandName}
        className="h-16 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
      <p className="mt-4 text-sm font-semibold text-center tracking-wide text-[#333333] group-hover:text-[#FFAB00] transition-colors duration-300">
        {brandName}
      </p>
    </div>
  </motion.div>
);

export default function Brands() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white mb-16 md:mb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={main}
            alt="Luxury Cars"
            className="w-full h-full object-cover brightness-75"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333a0] to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-4 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 capitalize tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFAB00]">Premium</span> Automotive Brands
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#FFF9C4] mb-8 max-w-2xl mx-auto"
          >
            Discover the world's most prestigious automotive brands in one exclusive collection
          </motion.p>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFAB00]">Trusted</span> by Connoisseurs Worldwide
          </h2>
          <p className="text-[#616161] max-w-2xl mx-auto">Explore our curated selection of the finest automotive brands in the industry</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {brandLogos.map((logo, index) => {
            const brandName = logo
              .replace('-logo', '')
              .replace('-logo.png', '')
              .replace('.png', '')
              .replace(' (1)', '')
              .replace('bmw-logo-2020-gray.png', 'bmw')
              .replace(/-/g, ' ')
              .toUpperCase();

            return (
              <BrandCard 
                key={index}
                logo={logo}
                brandName={brandName}
                index={index}
              />
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 text-center px-4"
        >
          <div className="relative max-w-4xl mx-auto bg-[#333333] border border-[#FFD70030] rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD70010] to-[#FFAB0010] opacity-60 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Looking for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFAB00]">Specific</span> Brand?
              </h3>
              <p className="text-[#FFEE58] mb-6">Can't find what you're looking for? Let us know!</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFAB00] text-[#333333] px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request a Brand
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}