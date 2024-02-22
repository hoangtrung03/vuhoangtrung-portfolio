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
        <p>{text}</p>
      ) : (
        <div>
          <p>{isExpanded ? text : `${text.slice(0, maxLength)}...`}</p>
          <button onClick={toggleReadMore} className='text-primary border-none bg-none'>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      )}
    </div>
  )
}
