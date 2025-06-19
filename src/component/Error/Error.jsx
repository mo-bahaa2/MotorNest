import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-6 py-12 ">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-8 md:p-12 md:mt-7 shadow-lg border border-[#EEEEEE] text-center animate-fade-up duration-700">
        {/* Animation/Illustration */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-[#FFEBEE] animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-white border-2 border-[#F44336] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#F44336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F44336] to-[#E57373] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">Page Not Found</h2>
        <p className="text-lg text-[#616161] mb-8">
          The page you're looking for doesn't exist or might have been moved.
          Let's get you back to familiar territory.
        </p>
        
        {/* Interactive Button */}
        <Link
          to="/"
          className="relative inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border border-[#FFD700] group"
        >
          <span className="relative z-10">Return to Home</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="absolute inset-0 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-500"></span>
        </Link>
        
        {/* Extra Info */}
        <div className="mt-10 text-sm text-[#9E9E9E]">
          <p>HTTP 404 - The requested resource could not be found</p>
        </div>
      </div>
    </div>
  );
}