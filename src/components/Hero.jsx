import React from 'react';
import heroImage from '../assets/heroimg.png'; 

const Hero = () => {
  return (
    <div>
      <section className=" font-intertight flex flex-col items-center px-4 py-8 max-w-6xl md:py-12 lg:mx-auto">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full md:w-3/4 lg:w-2/3 mx-auto leading-relaxed'>
          Power Up Your Events with Interactive <span className="bg-[#2588C5] p-1 rounded">Q&A</span> Sessions
        </h1>
              
        <p className='text-center w-full md:w-3/4 lg:w-2/3 mx-auto pt-3 text-[#5F6064] mt-4 text-base md:text-lg lg:text-xl leading-relaxed'>

          Dee Events helps you Engage, Educate, and <br /> Empower Your Audience Seamlessly.
        </p>

        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8 mb-8 w-full'>
          <button className='bg-[#2588C5] text-white px-6 py-3 rounded-lg w-full md:w-auto font-semibold hover:bg-[#1e6fa0] transition-colors'>
            Sign Up for free
          </button>
          <button className='border border- bg-[#E8EDED] px-6 py-3 rounded-lg text-[#5F6064] w-full md:w-auto font-semibold mt-2 md:mt-0'>
            Book a Demo
          </button>
        </div>

        <div className='hero-image w-full flex justify-center'>
          <div className='w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto mt-4  flex items-center justify-center h-64 md:h-80 lg:h-96'>
            <img src={heroImage} alt="2 different  device screen" />
          </div>   
        </div>
      </section>
    </div>
  );
};

export default Hero;