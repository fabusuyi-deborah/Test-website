import React from 'react'
import mq from '../assets/mq.png'
import EC from '../assets/EC.png'
import HFD from '../assets/HFD.png'
import HFDL from '../assets/HFDL.png'
import MT from '../assets/MT.png'

const Sect3 = () => {
  return (
    <div>
      <section className=' m-12'>
        <div className='flex flex-col md:flex-row py-12 px-6 bg-[#F1F5F9]  rounded-lg'>
          <div className=' text-[#1C1C1C]  w-full md:w-2/5  mb-8 md:mb-0'>
            <h2 className='text-3xl font-bold mb-4'>Real-Time Moderation</h2>
            <p className='text-xl'>Keep your discussions focused and relevant with live question approval or rejection</p>
          </div>
          <div className= 'w-full md:w-3/5'>
            <img src={mq} alt=""  className=''/>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6'>

          <div className='bg-[#FEF3C7] p-4 rounded-2xl' > 
            <div className='w-[220px]'>
              <img src={EC} alt=""  className='' />
            </div>
            <div className='pt-4'>
              <h2 className='font-bold text-2xl'>Event Customisation</h2>
              <p className='pt-2'>Add your event’s branding, including logos, banners, and themes, to create a professional, consistent experience.</p>
              </div>
          </div>

          <div className='bg-[#EAF8FF] p-4 rounded-2xl'>
            <div className='w-[250px]'>
              <img src={HFD} alt="" className='' />
            </div>
            <div className='pt-4' >
              <h2 className='font-bold text-2xl'>Speaker Tagging</h2>
              <p className='pt-2'>Allow attendees to direct questions to specific speakers or multiple 
              panelists for more relevant discussions.</p>
            </div>
          </div>
  

        <div className='bg-[#FAF8F7] p-4 rounded-2xl'>
          <div className='w-[240px]'>
            <img src={HFDL} alt="" />
          </div>
          <div className='pt-4'>
            <h2 className='font-bold text-2xl'>Upvoting</h2>
            <p className='pt-2'>Empower your attendees to upvote questions they find interesting, ensuring the most relevant topics get addressed first</p>
          </div>
          </div>
          
          </div>

        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src={MT} alt="" />
          </div>
</div>
      
      </section>
    </div>
  )
}

export default Sect3
