import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const QandA = () => {
  const [openItems, setOpenItems] = useState(new Set())

  // Sample accordion data
  const accordionData = [
    {
      id: 1,
      title: 'What is  Dee Events',
      content: 'Dee Events is a web-based Q&A management platform designed to enhance audience engagement at events by providing tools for real-time question moderation, audience upvoting, and post-event analytics. It allows event hosts to create customized, interactive Q&A sessions with ease.'
    },
    {
      id: 2,
      title: 'How does we improve audience engagement??',
      content: 'Dee Events improves audience engagement by allowing attendees to submit questions in real-time, upvote questions they find interesting, and interact with speakers during events. This creates a dynamic and participatory environment where the most relevant questions rise to the top, ensuring that the audience feels heard and involved.'
    },
    {
      id: 3,
      title: 'Can I use Dee Events for free?',
      content: 'Yes, Dee Events offers a free tier that allows users to create and manage Q&A sessions with basic features. For more advanced functionalities such as analytics, custom branding, and larger event capacities, users can upgrade to one of the premium plans.'
    },
    {
      id: 4,
      title: 'Do attendees need an account to submit questions?',
      content: 'No, attendees do not need to create an account to submit questions. Dee Events allows users to submit questions anonymously or with a display name, making it easy for everyone to participate without the barrier of account creation.'
    },
    {
      id: 5,
      title: 'Can attendees submit questions anonymously?',
      content: 'Yes, Dee Events allows attendees to submit questions anonymously. This feature encourages more open participation, as attendees may feel more comfortable asking questions without revealing their identity.'
    }
  ]

  // Toggle accordion item
  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const AccordionItem = ({ item }) => {
    const isOpen = openItems.has(item.id)

    return (
      <div className='border border-[#F5F7FB] rounded-lg mb-2 overflow-hidden  duration-200'>
        <button
          onClick={() => toggleItem(item.id)}
          className='w-full px-6 py-4 text-left bg-[#F5F7FB] focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200'
          aria-expanded={isOpen}
        >
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold text-gray-900 pr-4'>
              {item.title}
            </h3>
            <div className='flex-shrink-0'>
              {isOpen ? (
                <Minus className='w-5 h-5 text-gray-500' />
              ) : (
                <Plus className='w-5 h-5 text-gray-500' />
              )}
            </div>
          </div>
        </button>
        
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='px-6 py-4 bg-[#F5F7FB] '>
            <p className='text-gray-700 leading-relaxed'>
              {item.content}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className='mb-8'>
        <p className='pb-2 text-center'>KNOW MORE ABOUT DEE EVENTS</p>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 text-center'>
          Frequently Asked Questions
        </h1>
      </div>

      {/* Accordion Items */}
      <div className='space-y-2'>
        {accordionData.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default QandA