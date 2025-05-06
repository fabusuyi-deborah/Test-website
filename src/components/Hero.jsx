import React from 'react';
import heroImage from '../assets/heroimg.png'; 

const Hero = () => {
  return (
  <div>
    <section className=" flex flex-col items center px-4 py-8 md:py-12">

      <h1 className='text-3xl md:text-4xl font-bold text-center w-full md:w-3/4 lg:w-2/3 mx-auto'>
        Power Up Your Events with Interactive <span> Q&A  </span>Sessions</h1>
      
      <p className= ' block text-center w-full  md:w-3/4  lg:w-2/3 mx-auto pt-3 text-[#5F6064] mt-4'>PAAQ Events helps you Engage, Educate, and <br /> Empower Your Audience Seamlessly. </p>

      <div className='flex flex-col md:flex-row  justify-center items-center gap-4 mt-6 mb-8 w-full' >
        <button className='bg-[#2588C5] text-white px-3 py-3 rounded w-full md:w-auto'>Sign Up for free</button>
        <button className='bg-[#E8EDED] px-3 py-3 rounded text-[#5F6064] w-full md:w-auto mt-2 md:mt-0'>Book a Demo</button>
      </div>

      <div className='hero-image w-full flex justify-center '>
        <img src={heroImage}  alt="Hero Image" className='w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto mt-4'  />
      </div>
      </section>
      </div>
  );
};

export default Hero;