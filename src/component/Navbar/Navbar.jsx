import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { toast } from 'react-toastify'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { userToken, setUserToken } = useContext(UserContext)
  const navigate = useNavigate()

  const linkClass = "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFD700] after:transition-all after:duration-300 hover:after:w-full text-[#333333] hover:text-[#FFAB00]"

  function logOut() {
    localStorage.removeItem('userToken')
    setUserToken(null)
    toast.success('You have logged out successfully 👋')
    navigate('/login')
  }

  return (
    <nav className="bg-[#F5F5F5] fixed top-0 left-0 w-full z-50 border-b border-[#EEEEEE] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-[#333333]">
          <span className="text-[#FFD700]">Motor</span>Nest
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none cursor-pointer text-[#333333] hover:text-[#FFAB00] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-base">
          {userToken ? (
            <>
              <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
              <li><NavLink to="/listing" className={linkClass}>Listings</NavLink></li>
              <li><NavLink to="/brands" className={linkClass}>Brands</NavLink></li>
              <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
              <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
              <li>
                <NavLink 
                  to="/favcards" 
                  className="flex items-center justify-center bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Save <i className="fa-regular fa-bookmark pl-2"></i>
                </NavLink>
              </li>
              <li>
                <button 
                  onClick={() => logOut()} 
                  className="bg-[#F44336] hover:bg-[#C62828] text-white px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink 
                  to="/register" 
                  className="bg-[#1976D2] hover:bg-[#0D47A1] text-white px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/login" 
                  className="border border-[#1976D2] text-[#1976D2] hover:bg-[#E3F2FD] px-4 py-2 rounded-full transition-colors"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-3/4 bg-[#F5F5F5] shadow-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="flex justify-between items-center p-4 border-b border-[#EEEEEE]">
          <h2 className="text-xl font-bold text-[#333333]">
            <span className="text-[#FFD700]">Motor</span>Nest
          </h2>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-[#333333] hover:text-[#FFAB00] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <ul className="flex flex-col gap-4 p-6">
          {userToken ? (
            <>
              <li><NavLink onClick={() => setIsOpen(false)} to="/" className={`${linkClass} block py-2`}>Home</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/listing" className={`${linkClass} block py-2`}>Listings</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/brands" className={`${linkClass} block py-2`}>Brands</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/about" className={`${linkClass} block py-2`}>About</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/contact" className={`${linkClass} block py-2`}>Contact</NavLink></li>
              <li className="mt-4">
                <NavLink 
                  to="/favcards" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-[#FFD700] hover:bg-[#FFAB00] text-[#333333] px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg w-full"
                >
                  Save <i className="fa-regular fa-bookmark pl-2"></i>
                </NavLink>
              </li>
              <li className="mt-2">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    logOut()
                  }}
                  className="bg-[#F44336] hover:bg-[#C62828] text-white px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg w-full"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="mt-4">
                <NavLink 
                  to="/register" 
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1976D2] hover:bg-[#0D47A1] text-white px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg w-full block text-center"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="border border-[#1976D2] text-[#1976D2] hover:bg-[#E3F2FD] px-4 py-2 rounded-full transition-colors w-full block text-center"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}