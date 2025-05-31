import React from 'react'
import mq from '../assets/MQ.png'
import EC from '../assets/EC.png'
import HFD from '../assets/HFD.png'
import HFDL from '../assets/HFDL.png'
import MT from '../assets/MT.png'


const Sect3 = () => {
  // Hero features data
  const heroFeatures = [
    {
      id: 'moderation',
      title: 'Real-Time Moderation',
      description: 'Keep your discussions focused and relevant with live question approval or rejection',
      image: mq,
      bgColor: 'bg-[#F1F5F9]',
      alt: 'Real-time moderation interface'
    },
    {
      id: 'analytics',
      title: 'Post-Event Analytics',
      description: 'Gain insights into your event\'s engagement with metrics on question volume, upvotes, and attendee participation',
      image: MT,
      bgColor: 'bg-[#EDE9FE]',
      alt: 'Analytics dashboard'
    }
  ]

  // Grid features data
  const gridFeatures = [
    {
      id: 'customisation',
      title: 'Event Customisation',
      description: 'Add your event\'s branding, including logos, banners, and themes, to create a professional, consistent experience.',
      image: EC,
      bgColor: 'bg-[#FEF3C7]',
      alt: 'Event customisation options'
    },
    {
      id: 'tagging',
      title: 'Speaker Tagging',
      description: 'Allow attendees to direct questions to specific speakers or multiple panelists for more relevant discussions.',
      image: HFD,
      bgColor: 'bg-[#EAF8FF]',
      alt: 'Speaker tagging feature'
    },
    {
      id: 'upvoting',
      title: 'Upvoting',
      description: 'Empower your attendees to upvote questions they find interesting, ensuring the most relevant topics get addressed first',
      image: HFDL,
      bgColor: 'bg-[#FAF8F7]',
      alt: 'Question upvoting system'
    }
  ]

  // Reusable hero feature component
  const HeroFeature = ({ feature }) => (
    <div className={`flex flex-col lg:flex-row ${feature.bgColor} rounded-lg m-4 xl:mx-8 2xl:mx-16`}>
      <div className='text-[#1C1C1C] flex flex-col justify-center lg:px-12 xl:px-16 2xl:px-20 m-6 lg:w-1/2'>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 xl:mb-6'>{feature.title}</h2>
        <p className='text-base lg:text-lg xl:text-xl leading-relaxed'>{feature.description}</p>
      </div>
      <div className='lg:w-1/2 flex items-center'>
        <img src={feature.image} alt={feature.alt} className='w-full h-auto object-contain max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto' />
      </div>
    </div>
  )

  // Reusable grid feature card component
  const FeatureCard = ({ feature }) => (
    <div className={`${feature.bgColor} p-4 lg:p-6 xl:p-8 rounded-2xl xl:rounded-3xl hover:shadow-lg transition-shadow duration-300`}>
      <div className='mb-4 xl:mb-6'>
        <img src={feature.image} alt={feature.alt} className='w-full h-auto object-contain max-h-48 lg:max-h-56 xl:max-h-64' />
      </div>
      <div className='pt-4'>
        <h2 className='font-bold text-2xl lg:text-3xl xl:text-4xl mb-2 xl:mb-4'>{feature.title}</h2>
        <p className='pt-2 text-sm lg:text-base xl:text-lg leading-relaxed'>{feature.description}</p>
      </div>
    </div>
  )

  return (
    <section className='py-8 px-4 lg:py-12 xl:py-16 2xl:py-20 lg:mx-auto max-w-7xl xl:max-w-none 2xl:max-w-screen-2xl'>
      {/* Hero Feature */}
      <HeroFeature feature={heroFeatures[0]} />
      
      {/* Grid Features */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16 py-12 xl:py-16 2xl:py-20 px-6 xl:px-12 2xl:px-16'>
        {gridFeatures.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      {/* Second Hero Feature */}
      <HeroFeature feature={heroFeatures[1]} />
    </section>
  )
}

export default Sect3
