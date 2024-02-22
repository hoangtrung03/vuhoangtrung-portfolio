'use client'

import { useState } from 'react'

interface ReadMoreProps {
  text: string
  maxLength: number
}

export default function ReadMore({ text, maxLength }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      {text.length <= maxLength ? (
        <p className='text-14 lg:text-16 text-white mt-1 lg:mt-2 text-justify'>{text}</p>
      ) : (
        <div>
          <p className='text-14 lg:text-16 text-white mt-1 lg:mt-2 text-justify'>
            {isExpanded ? text : `${text.slice(0, maxLength)}...`} <button onClick={toggleReadMore} className='text-secondary underline font-medium border-none bg-none'>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>
      )}
    </div>
  )
}
