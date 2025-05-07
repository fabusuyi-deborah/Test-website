import React from 'react'
import FI from '../assets/FI.png'
import DSC from '../assets/DSC.png'
import GP from '../assets/GP.png'

const Sect5 = () => {
  return (
    <div>
      <section className=' py-8 px-4  md:py-8 lg:mx-auto'>
        <h2 className='text-center font-bold text-[#979797] text-3xl'>How it Works</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8  mt-10'>
          
          <div className='bg-[#CDE7FF] rounded-2xl'>
              <img src={FI} alt="" className='w-full' />
            <div>
              <p className='text-[#1C1C1C] text-left p-6 text-2xl'>Set up your event in minutes.</p>
            </div>
          </div>

          <div className='bg-[#00B5B4] rounded-2xl'>
              <img src={DSC} alt=""  className='w-full'/>
            <div>
              <p className='text-[#FFFFFF] text-2xl p-6  '>Invite attendees and speakers seamlessly.</p>
            </div>
          </div>

          
          <div className='bg-[#1591CB] rounded-2xl'>
              <img src={GP} alt="" className='w-full' />
            <div>
              <p className= 'text-[#FFFFFF] text-2xl p-6'>Moderate questions, upvote, and engage.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Sect5;
