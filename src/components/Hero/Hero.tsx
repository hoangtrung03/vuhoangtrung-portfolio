'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import WavyText from '../WavyText'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <section className='h-screen text-white mt-6' ref={ref}>
      <div className='container py-10 lg:py-60'>
        <div className='lg:max-w-[50%]'>
          <h2>
            <WavyText
              text='My Name Is'
              classText='uppercase font-bold text-32 lg:text-48 justify-center lg:justify-start items-center'
            />
            <WavyText
              text='Hoang Trung'
              delay={0.6}
              classText='uppercase font-bold text-38 lg:text-64 text-[#FF3860] justify-center lg:justify-start items-center'
            />
          </h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.6, delay: 0.7 }}
            className='text-14 lg:text-16 mt-2 lg:mt-4 text-center lg:text-left'
          >
            I&apos;m a Web Developer with expertise in creating engaging and user-friendly websites. Specializing in
            front-end and back-end development, I bring creative solutions to life with a keen eye for design.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
