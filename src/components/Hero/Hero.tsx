'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3, delay: 0.25 }}
        className='container py-10 lg:py-60 typewriter'
      >
        <div className='lg:max-w-[50%]'>
          <h1 className='uppercase text-32 lg:text-48 font-bold text-center lg:text-left'>
            My Name Is <br />
            <span className='text-[#FF3860] text-36 lg:text-64'>Hoang Trung</span>
          </h1>
          <p className='text-14 lg:text-16 mt-2 lg:mt-4 text-center lg:text-left'>
            I&apos;m a Web Developer with expertise in creating engaging and user-friendly websites. Specializing in
            front-end and back-end development, I bring creative solutions to life with a keen eye for design.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
