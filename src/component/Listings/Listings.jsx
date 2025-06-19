import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { carsContext } from '../../context/CarsContext';

export default function Listing() {
  const categories = [
    { name: 'Sedan', icon: '🚗' },
    { name: 'SUV', icon: '🚙' },
    { name: 'Hatchback', icon: '🚘' },
    { name: 'Coupe', icon: '🏎️' },
    { name: 'Hybrid', icon: '🌱' },
    { name: 'Convertible', icon: '☀️' }
  ];

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { getCarToSave, savedCarIds } = useContext(carsContext);

  async function getAllCars() {
    try {
      let { data } = await axios.get(`https://azmycarsapi.runasp.net/api/Car`);
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  }

  async function getAllCarsCategories(category) {
    setLoading(true);
    setSelectedCategory(category);
    try {
      let { data } = await axios.get(`https://azmycarsapi.runasp.net/api/Car/category/${category}`);
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars by category:', error);
    } finally {
      setLoading(false);
      const scrollTarget = document.getElementById('availableCarsSection');
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  useEffect(() => {
    getAllCars();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP'
    }).format(price).replace('EGP', 'EGP');
  };

  const handleSaveCar = async (carId, e) => {
    e.stopPropagation();
    if (!savedCarIds?.has(carId)) {
      await getCarToSave(carId);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#333333] to-[#616161] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFAB00]">
              Premium Auto Collection
            </span>
          </h1>
          <p className="text-xl text-[#EEEEEE] max-w-3xl mx-auto">
            Discover luxury vehicles that match your sophisticated taste
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1976D2] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              <span className="relative pb-2">
                Explore Our Categories
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFAB00]"></span>
              </span>
            </h2>
            <p className="text-lg text-[#616161] max-w-2xl mx-auto">
              Select from our exclusive range of premium vehicle types
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
                  selectedCategory === category.name ? 'ring-2 ring-[#FFD600]' : ''
                }`}
                onClick={() => getAllCarsCategories(category.name)}
              >
                <div className={`p-6 rounded-xl shadow-lg flex flex-col items-center h-full ${
                  selectedCategory === category.name 
                    ? 'bg-white border-t-4 border-[#FFD700]' 
                    : 'bg-white group-hover:bg-[#FFF9C4]'
                }`}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 transition-all ${
                    selectedCategory === category.name 
                      ? 'bg-[#FFEE58] transform scale-110' 
                      : 'bg-[#F5F5F5] group-hover:bg-[#FFEE58]'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    selectedCategory === category.name 
                      ? 'text-[#FFAB00]' 
                      : 'text-[#333333] group-hover:text-[#FFAB00]'
                  }`}>
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cars Listing Section */}
      <div id="availableCarsSection" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">
              <span className="relative pb-2">
                {selectedCategory === 'All' ? 'Luxury Vehicle Gallery' : `Premium ${selectedCategory} Collection`}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFAB00]"></span>
              </span>
            </h2>
            <p className="text-lg text-[#616161]">
              {selectedCategory === 'All' 
                ? 'Exquisite selection of the finest automobiles' 
                : `Curated collection of ${selectedCategory} models`}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#FFD700]"></div>
            </div>
          ) : cars.length === 0 ? (
            <div className="text-center py-20 bg-gradient-to-br from-[#FFF9C4] to-[#FFEE58] rounded-2xl max-w-4xl mx-auto shadow-lg">
              <div className="inline-block p-6 bg-white rounded-full shadow-xl mb-8 transform rotate-12">
                <span className="text-6xl text-[#FFAB00]">🚗</span>
              </div>
              <h3 className="text-3xl font-bold text-[#333333] mb-4">No Vehicles Available</h3>
              <p className="text-xl text-[#616161] mb-8">
                {selectedCategory === 'All' 
                  ? 'Our luxury inventory is currently being updated' 
                  : `We're preparing our premium ${selectedCategory} collection`}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  getAllCars();
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFAB00] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore All Vehicles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cars.map((car) => {
                const imageUrl = car.imageUrl
                  ? car.imageUrl.startsWith('/')
                    ? `https://azmycarsapi.runasp.net${car.imageUrl}`
                    : car.imageUrl
                  : 'https://via.placeholder.com/600x400?text=No+Image';

                const isSaved = savedCarIds?.has(car.id);

                return (
                  <div
                    key={car.id}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative group transform hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <button
                        onClick={(e) => handleSaveCar(car.id, e)}
                        title={isSaved ? "Saved" : "Save to favorites"}
                        className={`absolute top-4 right-4 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
                          isSaved 
                            ? 'bg-[#FFD700] text-white scale-110 ring-2 ring-white' 
                            : 'bg-white/90 text-[#616161] hover:bg-[#FFD700] hover:text-white hover:scale-110'
                        }`}
                        disabled={isSaved}
                      >
                        <span className="text-xl">
                          {isSaved ? '🔖' : '📌'}
                        </span>
                      </button>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#FFD700] text-[#333333] font-bold px-3 py-1 rounded-full text-sm">
                          {new Date(car.year).getFullYear()}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-5">
                        <h3 className="text-2xl font-bold text-[#333333] mb-2">
                          {car.make} {car.model}
                        </h3>
                        <div className="flex items-center space-x-4 text-[#616161]">
                          <span className="flex items-center">
                            <span className="mr-2 text-[#FFAB00]">🎨</span>
                            <span className="capitalize">{car.color}</span>
                          </span>
                          <span className="flex items-center">
                            <span className="mr-2 text-[#FFAB00]">⚙️</span>
                            <span className="capitalize">{car.category || 'N/A'}</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-[#616161] mb-6 line-clamp-2 min-h-[3rem]">
                        {car.description || 'No description available for this premium vehicle'}
                      </p>

                      <div className="flex items-center justify-between border-t border-[#EEEEEE] pt-5">
                        <div className="text-2xl font-bold text-[#FFAB00]">
                          {formatPrice(car.price)}
                        </div>
                        <Link
                          to={`/ProductDetails/${car.id}`}
                          className="px-6 py-3 bg-[#333333] hover:bg-[#FFD700] text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
} 