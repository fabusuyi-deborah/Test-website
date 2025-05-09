import React from 'react'
import { useState } from 'react'
import PaaQ from '../assets/PaaQ.png'
import Plans from './Plans.jsx'


const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true); // State to toggle between monthly and annual billing

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

    return (
      <div>
        <section className='py-8 px-4 md:py-8 lg:mx-auto m-4 '>
          <div className='text-center bg-[#EAF7FF] rounded-lg p-4'>
            <div className='justify-center items-center flex flex-col pt-4'>
              <img src={PaaQ} alt="" />
            </div>
            <h3 className='pt-4 text-[#181F1F] font-medium'>PRICING $ PLANS</h3>
            <h2 className='pt-4 font-bold text-4xl '>Explore and choose the perfect plan for your needs.</h2>

            <div className="flex items-center justify-center space-x-4 m-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
                Monthly
              </span>
      
              <button
                onClick={toggleBilling}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
                role="switch"
                aria-checked={isAnnual}
              >
                <span className="sr-only">Toggle between monthly and annual billing</span>
                <div
                  className={`${isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                    } pointer-events-none relative inline-block h-5 w-10 rounded-full transition-colors duration-200 ease-in-out`}
                >
                  <span
                    className={`${isAnnual ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </div>
              </button>
      
              <span className={`text-sm font-medium ${isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
                Annual
              </span>
            </div>

          </div>

          <Plans isAnnual={isAnnual} />

        </section>
      </div>
    )
  }

export default Pricing;
