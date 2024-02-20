'use client'

import { applyParallax, handleScroll } from '@/lib/utils/utilFuncs'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ParallaxItem(props: any) {
  const { scroll, ...rest } = props

  const speed = props.speed || -0.02

  const [y, setY] = useState<number>(0)
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (el.current) {
      window.addEventListener(
        'scroll',
        handleScroll(() => {
          if (el.current) {
            setY(el.current.getBoundingClientRect().top)
          }
        })
      )
    }
  }, [])

  return (
    <motion.div
      ref={el}
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      animate={{
        opacity: scroll > y ? 1 : 0,
        y: applyParallax(scroll, y, speed),
        x: applyParallax(scroll, y, speed)
      }}
      transition={{ duration: 0.5 }}
      {...rest}
    />
  )
}
