import React from 'react'
import mq from '../assets/mq.png'
import EC from '../assets/EC.png'
import HFD from '../assets/HFD.png'
import HFDL from '../assets/HFDL.png'

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

        <div>
          <div>
            <div>
              <img src={EC} alt="" />
            </div>
            <div>
              <h2>Speaker Tagging</h2>
              <p>Allow attendees to direct questions to specific speakers or multiple 
              panelists for more relevant discussions.</p>
              </div>
          </div>

          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Upvoting</h2>
              <p>Empower your attendees to upvote questions they find interesting, ensuring the most relevant topics get addressed first</p>
            </div>
          </div>
  
        </div>

        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>


      
      </section>
    </div>
  )
}

export default Sect3
