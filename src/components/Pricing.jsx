import React, { useState } from 'react';
import Plans from './Plans.jsx';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true); // Toggle state

  return (
    <div>
      <section className="py-8 px-4 md:py-8 lg:mx-auto m-4 max-w-7xl">
        <div className="text-center bg-[#EAF7FF] rounded-lg p-4">
          <h3 className="pt-4 text-[#181F1F] font-medium">PRICING & PLANS</h3>
          <h2 className="pt-4 font-bold text-4xl">
            Explore and choose the perfect plan for your needs.
          </h2>

          <div className="flex items-center justify-center space-x-4 m-4">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? 'text-[#1AB8B7]' : 'text-gray-500'
              }`}
            >
              Monthly
            </span>

            <div
              onClick={() => setIsAnnual((prev) => !prev)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
                isAnnual ? 'bg-[#1AB8B7]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </div>

            <span
              className={`text-sm font-medium ${
                isAnnual ? 'text-[#1AB8B7]' : 'text-gray-500'
              }`}
            >
              Annual
            </span>
          </div>
        </div>

        {/* Pricing plans display */}
        <Plans isAnnual={isAnnual} />
      </section>
    </div>
  );
};

export default Pricing;
