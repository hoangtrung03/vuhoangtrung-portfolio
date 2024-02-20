'use client'

import type { HTMLMotionProps, Variants } from 'framer-motion'
import { motion } from 'framer-motion'

interface WavyTextProps extends HTMLMotionProps<'div'> {
  text: string
  delay?: number
  duration?: number
  classText?: string
}

export default function WavyText({ text, delay = 0, duration = 0.05, classText, ...props }: WavyTextProps) {
  const letters = Array.from(text)

  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay }
    })
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <motion.span
      style={{ display: 'flex' }}
      variants={container}
      initial='hidden'
      exit='hidden'
      animate='visible'
      className={classText}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
