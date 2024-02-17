/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'

type ScrollOptions = {
  throttle: number
}

let supportsPassive = false
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function () {
      return (supportsPassive = true)
    }
  })
  window.addEventListener('testPassive', null as any, opts)
  window.removeEventListener('testPassive', null as any, opts)
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e)
}

const getPosition = () => ({
  x: window.scrollX,
  y: window.scrollY
})

const defaultOptions = {
  throttle: 100
}

function useWindowScrollPosition(options: ScrollOptions) {
  const opts = Object.assign({}, defaultOptions, options)

  const [position, setPosition] = useState(getPosition())

  useEffect(() => {
    let throttleTimeout: any

    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          setPosition(getPosition())
          throttleTimeout = null
        }, opts.throttle)
      }
    }

    window.addEventListener('scroll', handleScroll, supportsPassive ? { passive: true } : false)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(throttleTimeout)
    }
  }, [])

  return position
}

export default useWindowScrollPosition
