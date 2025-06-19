import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../context/UserContext'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  let {setUserToken,userToken}= useContext(UserContext)
  const togglePassword = () => setShowPassword(!showPassword)

  // ✅ Validation Schema
  const validationSchema = yup.object({
    email: yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: yup.string()
      .required('Password is required')
  })

  async function login(values) {
    setLoading(true)
    try {
      const { data } = await axios.post(
        'https://azmycarsapi.runasp.net/api/Identity/login',
        values
      )
      console.log(data)

      toast.success('You have logged in successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: '#E8F5E9',
          color: '#2E7D32',
          borderLeft: '4px solid #4CAF50'
        }
      })
      
      localStorage.setItem('userToken', data.token)
      setUserToken(data.token);
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      
      toast.error('Login failed! Please check your credentials.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: '#FFEBEE',
          color: '#C62828',
          borderLeft: '4px solid #F44336'
        }
      })
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: login,
    validationSchema
  })

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden bg-[#F5F5F5]">
      {/* Fantasy Background Elements (Gold & White Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Floating Golden Orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-amber-100 to-[#FFD700] opacity-20 animate-float"></div>
        <div className="absolute top-1/4 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-amber-50 to-[#FFD700] opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-100 to-[#FFAB00] opacity-20 animate-float-delay-2"></div>
        
        {/* Golden Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#FFD700] opacity-20"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Golden Silhouette (Castle/Architecture) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FFD700]/10 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-[#FFD700]/10 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-40 bg-[#FFD700]/10 rounded-t-lg -ml-8"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-48 bg-[#FFD700]/10 rounded-t-lg ml-16"></div>
          <div className="absolute bottom-0 right-1/4 w-16 h-36 bg-[#FFD700]/10 rounded-t-lg"></div>
          <div className="absolute bottom-0 right-1/4 w-16 h-44 bg-[#FFD700]/10 rounded-t-lg -mr-8"></div>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#EEEEEE] relative z-10 animate-fade-up duration-700">
        {/* Header with Golden Accent */}
        <div className="mb-8 text-center relative">
          <div className="w-16 h-1 bg-[#FFD700] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-3xl font-bold text-[#333333]">Welcome Back</h2>
          <p className="text-[#9E9E9E] mt-2">Please login to your account</p>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#FFD700] animate-pulse"></div>
        </div>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="w-full bg-white text-[#333333] border border-[#EEEEEE] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition duration-200"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-[#F44336] text-sm mt-2 flex items-center">
                <i className="fas fa-exclamation-circle mr-1"></i>
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#333333] mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="w-full bg-white text-[#333333] border border-[#EEEEEE] rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition duration-200"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[38px] text-[#9E9E9E] hover:text-[#FFD700] transition duration-200"
            >
              <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-lg`}></i>
            </button>
            {formik.touched.password && formik.errors.password && (
              <p className="text-[#F44336] text-sm mt-2 flex items-center">
                <i className="fas fa-exclamation-circle mr-1"></i>
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? 'bg-[#FFEE58] cursor-not-allowed' : 'bg-[#FFD700] hover:bg-[#FFAB00]'
            } text-[#333333] py-3 rounded-lg font-semibold shadow-md transition duration-300 flex items-center justify-center relative overflow-hidden group`}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Logging In...
              </>
            ) : (
              <>
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-[#FFEE58] opacity-0 group-hover:opacity-20 transition duration-300"></span>
              </>
            )}
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Link 
              to="/forgot-password" 
              className="text-[#1976D2] hover:text-[#0D47A1] text-sm font-medium transition duration-200"
            >
              Forgot your password?
            </Link>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center border-t border-[#EEEEEE] pt-6">
          <p className="text-[#616161] text-sm">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-[#1976D2] font-medium hover:underline hover:text-[#0D47A1] transition duration-200"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Toast Container with Custom Styles */}
      <ToastContainer 
        toastStyle={{
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      />

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 1s; }
        .animate-float-delay-2 { animation: float-delay-2 12s ease-in-out infinite 2s; }
      `}</style>
    </section>
  )
}