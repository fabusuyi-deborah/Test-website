import React from 'react'
import people from '../assets/people.png'

const CommunityPartnerships = () => {
  return (
    <section className='bg-[#F5F7FB] py-16  lg:py-20 xl:py-24'>
      <div className='max-w-6xl mx-auto bg-white rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] shadow-lg py-8 lg:p-12 xl:p-16'>
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-12 xl:gap-16'>
          
          {/* Content Section */}
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='text-3xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 '>
              Community and
              <br />
              Partnerships
            </h2>
            
            <p className='text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 lg:mb-10 max-w-xl lg:max-w-none'>
              We're proud to collaborate with leading professional 
              bodies and organizations that share our commitment 
              to engagement and innovation.
            </p>
            
            <button className='bg-[#2588C5] hover:bg-blue-600 text-white font-semibold px-6 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 rounded-xl lg:rounded-2xl text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
              Contact us
            </button>
          </div>
          
          {/* Image Section */}
          <div className='flex-1 max-w-lg lg:max-w-none'>
            <div className='relative'>
              <img 
                src={people}
                alt='Two people having a friendly conversation in a beautiful outdoor setting with flowers'
                className='w-full h-auto rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] shadow-2xl object-cover'
              />
              
              {/* Optional: Add a subtle overlay for better text contrast if needed */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem]'></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default CommunityPartnerships