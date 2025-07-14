import React from 'react'
import girl_image from '../assets/Girl.png'

const Sect4 = () => {
  return (
    <div>
      <section className='py-8 md:py-8 '>
        <div className='flex flex-col md:flex-row items-center justify-between bg-[#EAF8FF] '>
          <div className=' text-[#1C1C1C] md:w-3/5 mb-6 md:mb-9 p-10 '>
            <blockquote className='text-[#5F6064]  text-2xl md:text-3xl font-medium leading-relaxed'>“Dee Events made our conference Q&A sessions a breeze. The real-time moderation was a game- changer!” </blockquote>
            <p className='mt-6 font-semibold'>- Isaac Banda, Event Host</p>
          </div>
          <div className='md:w-2/5 p-6'>
            <img src={girl_image} alt="" className='' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sect4;
