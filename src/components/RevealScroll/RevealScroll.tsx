'use client'

import type { HTMLMotionProps, Variants } from 'framer-motion'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

interface RevealScrollProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode
  delay?: number
  duration?: number
  classText?: string
}

export default function RevealScroll({ children, delay = 0, duration = 0.05, classText, ...props }: RevealScrollProps) {
  const ref = useRef(null)
  const animationControl = useAnimation()
  const inView = useInView(ref)

  if (inView) {
    animationControl.start('visible')
  }

  const container: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: duration, delayChildren: i * delay }
      })
    }),
    [delay, duration]
  )

  return (
    <motion.span
      style={{ display: 'flex' }}
      variants={container}
      initial='hidden'
      exit='hidden'
      animate={animationControl}
      className={classText}
      {...props}
      ref={ref}
    >
      {children}
    </motion.span>
  )
}
