import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#CCECFF] px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">DEE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Navigation Pills */}
          <div className="flex bg-white/60 backdrop-blur-sm rounded-full p-1 shadow-sm border border-white/40">
            <button className=" text-gray-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/50"> 
              DEE App
            </button>
            <button className="bg-sky-200 hover:bg-sky-300 text-gray-600 hover:text-gray-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ">
              DEE Events
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 ml-8">
            <button className="bg-black text-white px-6 py-2.5 rounded font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm">
              Sign up for free
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-6 py-2.5 rounded border border-gray-300 hover:border-gray-400 transition-all duration-300 bg-white/60 backdrop-blur-sm">
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
            {/* Navigation Options */}
            <div className="p-4 border-b border-gray-200/50">
              <div className="space-y-2">
                <button className="w-full bg-sky-200 text-gray-800 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-sky-300">
                  DEE Events
                </button>
                <button className="w-full text-gray-600 hover:text-gray-800 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gray-100">
                  DEE App
                </button>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="p-4 space-y-3">
              <button className="w-full bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300">
                Sign up for free
              </button>
              <button className="w-full text-gray-700 hover:text-gray-900 px-4 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-300 bg-white/60">
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