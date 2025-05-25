import React from 'react'
import FI from '../assets/FI.png'
import DSC from '../assets/DSC.png'
import GP from '../assets/Gp.png'


const Sect5 = () => {
  // Data-driven approach - makes it easy to add/modify steps
  const steps = [
    {
      id: 1,
      image: FI,
      bgColor: 'bg-[#CDE7FF]',
      textColor: 'text-[#1C1C1C]',
      description: 'Set up your event in minutes.',
      alt: 'Setup event illustration'
    },
    {
      id: 2,
      image: DSC,
      bgColor: 'bg-[#00B5B4]',
      textColor: 'text-[#FFFFFF]',
      description: 'Invite attendees and speakers seamlessly.',
      alt: 'Invite attendees illustration'
    },
    {
      id: 3,
      image: GP,
      bgColor: 'bg-[#1591CB]',
      textColor: 'text-[#FFFFFF]',
      description: 'Moderate questions, upvote, and engage.',
      alt: 'Moderate questions illustration'
    }
  ]

  // Reusable step card component
  const StepCard = ({ step }) => (
    <div className={`${step.bgColor} rounded-2xl`}>
      <img src={step.image} alt={step.alt} className='w-full' />
      <div>
        <p className={`${step.textColor} text-2xl p-6`}>
          {step.description}
        </p>
      </div>
    </div>
  )

  return (
    <section className='py-8 px-4 md:py-8 lg:mx-auto'>
      <h2 className='text-center font-bold text-[#979797] text-3xl'>
        How it Works
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  )
}


export default Sect5;
