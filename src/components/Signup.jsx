import React from 'react'

const Signup = () => {
  return (
    <div>
      <section className='bg-[#FAF8F7]  px-4 py-8 md:py-12'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#1C1C1C] max-w-4xl mx-auto text-center'>
            Join Thousands of Hosts Who Trust DEE Events to Elevate Their Q&As
          </h1>
          <p className='text-[#5F6064] mt-4'>
            Join thousands of hosts who trust DEE Events to elevate their Q&As.
          </p>
        </div>
        <div className='flex md:flex-row justify-center items-center gap-4 mt-6 mb-8 w-full max-w-3xl mx-auto'>
          <button className='bg-[#2588C5] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#1A6F9B] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Sign up for free
          </button>
          <button className='bg-[#E8EDED] text-[#5F6064] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#e7eaea] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-50 focus:ring-offset-2'>
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  )
}

export default Signup;