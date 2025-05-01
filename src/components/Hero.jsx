import React from 'react';
import heroImage from '../assets/heroimg.png'; 

const Hero = () => {
  return (
    <div className="">
      <h1 className='block font-bold text-4xl text-center w-1/2 mx-auto '>
      Power Up Your Events with Interactive <span> Q&A  </span>Sessions</h1>
      <p className= ' block text-center w-1/2 mx-auto pt-3 text-[#5F6064]'>PAAQ Events helps you Engage, Educate, and <br /> Empower Your Audience Seamlessly. </p>

      <div className='flex justify-center items-center gap-4 mt-4 mb-4'>
        <button className='bg-[#2588C5] text-white px-3 py-3 rounded'>Sign Up for free</button>
        <button className='bg-[#E8EDED] px-3 py-3 rounded text-[#5F6064]'>Book a Demo</button>
      </div>

      <div className='hero-image'>
        <img src={heroImage}  alt="Hero Image" className='w-[50rem] block mx-auto mt-5'  />
      </div>
    </div>
  );
};

export default Hero;