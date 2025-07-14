import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#CCECFF] px-3 py-3 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
         <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
        
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 ml-8">
            <button className="bg-black text-white px-6 py-2.5 rounded font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm">
              Sign up for free
            </button>
            <button className="text-black px-6 py-2.5 rounded border border-black hover:border-gray-400 transition-all duration-300 backdrop-blur-sm">
              Log In
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-white/60 backdrop-blur-sm text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-lg border border-white/40 transition-all duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 overflow-hidden">

            {/* Auth Buttons */}
            <div className="p-4 space-y-3">
              <button className="w-full bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300">
                Sign up for free
              </button>
              <button className="w-full text-gray-700 hover:text-gray-900 px-4 py-3 rounded-xl border border-black hover:border-gray-400 transition-all duration-300 bg-white/60">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Nav;