import React, { useContext, useEffect } from 'react'
import { carsContext } from '../../context/CarsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faCalendarAlt, faMoneyBillWave, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Favorites() {
  const { save, refreshFavorites } = useContext(carsContext)

  useEffect(() => {
    document.title = 'Saved Cars | Your Luxury Collection'
    refreshFavorites()
  }, [])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP'
    }).format(price).replace('EGP', 'EGP')
  }

  if (!save || save.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-[#F5F5F5] p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#EEEEEE] max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#FFF9C4] rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} className="text-[#FFD700] text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-[#333333] mb-3">Your Collection is Empty</h2>
          <p className="text-[#616161] mb-6">
            You haven't saved any cars yet. Start exploring and add your favorites!
          </p>
          <Link
            to="/cars"
            className="inline-block px-6 py-3 bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] font-semibold rounded-lg transition transform hover:scale-105 shadow-md"
          >
            Browse Cars
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#333333] mb-4">
              Your <span className="text-[#FFD700]">Premium</span> Collection
            </h1>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFEE58] rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-[#9E9E9E] max-w-2xl mx-auto">
            Curated selection of your favorite luxury vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {save.map((item) => {
            const car = item.car
            const imageUrl = car.imageUrl
              ? `https://azmycarsapi.runasp.net${car.imageUrl}`
              : 'https://via.placeholder.com/300x200?text=Premium+Car'

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-[#EEEEEE] transform hover:-translate-y-2"
              >
                {/* Image with favorite badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={car.model}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Premium+Car'
                    }}
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#FFEBEE] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeart} className="text-[#F44336] text-lg" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#333333] mb-1">{car.make} {car.model}</h3>
                    <div className="w-12 h-1 bg-[#FFD700] rounded-full"></div>
                  </div>

                  <div className="space-y-2 text-sm text-[#616161] mb-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faPalette} className="mr-3 text-[#FFD700]" />
                      <span>{car.color}</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-[#FFD700]" />
                      <span>{car.year}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#9E9E9E] line-clamp-3 mb-5">
                    {car.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#EEEEEE]">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-[#FFD700] flex items-center">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
                        {formatPrice(car.price)}
                      </div>

                      <Link
                        to={`/ProductDetails/${car.id}`}
                        className="px-5 py-2 bg-[#333333] hover:bg-[#FFD700] text-white hover:text-[#333333] text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                      >
                        <span>Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}