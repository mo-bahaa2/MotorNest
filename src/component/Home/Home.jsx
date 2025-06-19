import React from 'react'

export default function Home() {
    return <>
        <section className="h-screen w-full bg-[url('/Tabpanel.png')] bg-cover bg-center relative flex items-center">
            {/* Overlay ذهبي خفيف */}
            <div className="absolute inset-0 bg-[#FFD700]/10"></div>
            
            {/* Content */}
            <div className="relative z-10 px-10 max-w-xl ml-10">
                <div className="inline-block px-4 py-2 mb-4 bg-[#333333]/80 rounded-full">
                    <p className="text-sm text-[#FFEE58] font-medium">
                        We make finding the right car simple
                    </p>
                </div>
                
                <h1 className="text-5xl font-bold mb-6 text-white">
                    Drive Your <span className="text-[#FFD700]">Dream</span>
                </h1>
                
                <div className="flex gap-4">
                    <button className="
                        bg-[#FFD700] hover:bg-[#FFAB00]
                        text-[#333333] font-semibold
                        px-6 py-3 rounded-full
                        transition-all duration-300
                        flex items-center
                        shadow-md
                    ">
                        View Inventory
                        <i className="fa-solid fa-chevron-right ml-2"></i>
                    </button>

                    <button className="
                        bg-transparent hover:bg-[#333333]/30
                        text-white hover:text-[#FFEE58]
                        font-semibold
                        px-6 py-3 rounded-full
                        transition-all duration-300
                        flex items-center
                        border border-white hover:border-[#FFEE58]
                    ">
                        Contact Us
                        <i className="fa-solid fa-chevron-right ml-2"></i>
                    </button>
                </div>
            </div>
            
            {/* مؤشر التمرير لأسفل */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-10 h-10 border-2 border-[#FFD700] rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-chevron-down text-[#FFD700] text-sm"></i>
                </div>
            </div>
        </section>
    </>
}