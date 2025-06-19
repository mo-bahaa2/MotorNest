import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await axios.get(`https://azmycarsapi.runasp.net/api/Car/${id}`);
        setCar(data);
      } catch (err) {
        console.error('Error fetching car details:', err);
        setError('Failed to fetch car details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(!isFavorite ? 'Added to favorites' : 'Removed from favorites');
  };

  if (loading) return (
    <div className="pt-32 min-h-screen bg-[#F5F5F5] text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FFD700] mx-auto"></div>
      <p className="mt-4 text-[#616161]">Loading car details...</p>
    </div>
  );

  if (error) return (
    <div className="pt-32 min-h-screen bg-[#F5F5F5] text-center p-6">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-md border border-[#EEEEEE]">
        <span className="text-5xl mb-4">⚠️</span>
        <h2 className="text-2xl font-bold mb-4 text-[#333333]">Error Loading Car Details</h2>
        <p className="mb-6 text-[#616161]">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] px-6 py-2 rounded-lg font-medium transition-colors duration-300 shadow-md"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  if (!car) return (
    <div className="pt-32 min-h-screen bg-[#F5F5F5] text-center p-6">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-md border border-[#EEEEEE]">
        <span className="text-5xl mb-4">🚗</span>
        <h2 className="text-2xl font-bold mb-4 text-[#333333]">Car Not Found</h2>
        <p className="mb-6 text-[#616161]">The car you're looking for doesn't exist or may have been removed.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] px-6 py-2 rounded-lg font-medium transition-colors duration-300 shadow-md"
        >
          Browse Other Cars
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-[#F5F5F5] p-4 md:p-8">
      <div className="max-w-6xl mx-auto md:pt-10">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#FFD700] hover:text-[#FFAB00] flex items-center gap-2 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Back to Listings</span>
          </button>
          
          <button 
            onClick={toggleFavorite}
            className="text-[#FFD700] hover:text-[#FFAB00] transition-colors duration-300"
          >
            {isFavorite ? (
              <i className="fa-solid fa-heart text-2xl"></i>
            ) : (
              <i className="fa-regular fa-heart text-2xl"></i>
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#EEEEEE]">
          <div className="flex flex-col lg:flex-row">
            {/* Images Section */}
            <div className="lg:w-2/3 p-6">
              {/* Main Image */}
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] mb-4 bg-[#FFF9C4] rounded-lg flex items-center justify-center">
                {car.imageCars?.length > 0 ? (
                  <img
                    src={car.imageCars[currentImageIndex]?.imageUrl}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-contain transition-opacity duration-300"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80';
                    }}
                  />
                ) : (
                  <span className="text-5xl">🚗</span>
                )}
              </div>

              {/* Thumbnails */}
              {car.imageCars?.length > 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {car.imageCars.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index ? 'border-[#FFD700]' : 'border-transparent'
                      } bg-[#FFF9C4] flex items-center justify-center`}
                    >
                      <img
                        src={img.imageUrl}
                        alt={`${car.make} ${car.model} - ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80';
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section - Right Side */}
            <div className="lg:w-1/3 bg-[#F5F5F5] p-6 border-t lg:border-t-0 lg:border-l border-[#EEEEEE]">
              <div className="sticky top-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl lg:text-3xl font-bold text-[#333333]">
                    {car.make} {car.model}
                  </h1>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="bg-[#EEEEEE] text-[#616161] text-xs px-2 py-1 rounded-full">
                    {new Date(car.year).getFullYear()}
                  </span>
                  <span className="bg-[#EEEEEE] text-[#616161] text-xs px-2 py-1 rounded-full">
                    {car.color}
                  </span>
                  <span className="bg-[#EEEEEE] text-[#616161] text-xs px-2 py-1 rounded-full">
                    {car.mileage?.toLocaleString() || 'N/A'} km
                  </span>
                  <span className="bg-[#FFEE58] text-[#333333] text-xs px-2 py-1 rounded-full border border-[#FFD600]">
                    {car.category}
                  </span>
                </div>
                
                {/* Price */}
                <div className="mb-6 p-4 bg-[#FFF9C4] rounded-lg border border-[#FFEE58]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-[#616161] mb-1">Price</h3>
                    <span className="text-xs bg-[#FFEE58] px-2 py-1 rounded-full text-[#333333]">
                      {car.condition === 'Used' ? 'Used Vehicle' : 'New Vehicle'}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#FFAB00]">
                    {new Intl.NumberFormat('en-EG', {
                      style: 'currency',
                      currency: 'EGP'
                    }).format(car.price).replace('EGP', 'EGP')}
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#333333] mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: '⚡', label: 'Engine', value: `${car.engineSize || 'N/A'}L` },
                      { icon: '🔄', label: 'Transmission', value: car.transmission || 'N/A' },
                      { icon: '⛽', label: 'Fuel', value: car.fuelType || 'N/A' },
                      { icon: '🚗', label: 'Body', value: car.bodyStyle || 'N/A' },
                      { icon: '🎨', label: 'Color', value: car.color || 'N/A' },
                      { icon: '📅', label: 'Year', value: new Date(car.year).getFullYear() },
                    ].map((feature, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-[#EEEEEE] hover:border-[#FFEE58] transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="text-[#FFD700]">{feature.icon}</span>
                          <div>
                            <p className="text-xs text-[#9E9E9E]">{feature.label}</p>
                            <p className="text-[#333333] font-medium">{feature.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#333333] mb-3">Description</h3>
                  <p className="text-[#616161] text-sm whitespace-pre-line">
                    {car.description || 'No description available for this vehicle.'}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button 
                    className="w-full bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    onClick={() => alert('Contact seller functionality would go here')}
                  >
                    <i className="fa-solid fa-phone"></i>
                    <span>Contact Seller</span>
                  </button>
                  
                  <button 
                    className="w-full border border-[#FFD700] text-[#FFD700] hover:bg-[#FFF9C4] py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    onClick={() => alert('Schedule test drive functionality would go here')}
                  >
                    <i className="fa-solid fa-car"></i>
                    <span>Schedule Test Drive</span>
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-4 border-t border-[#EEEEEE]">
                  <div className="flex items-center gap-3 text-[#616161] text-sm mb-3">
                    <i className="fa-solid fa-shield-halved text-[#FFD700]"></i>
                    <span>1-year warranty included</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#616161] text-sm">
                    <i className="fa-solid fa-rotate-left text-[#FFD700]"></i>
                    <span>7-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}