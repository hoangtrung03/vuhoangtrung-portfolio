'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
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
    <section className='text-white mt-6 xl:h-[720px]' ref={ref}>
      <div className='container py-10 lg:py-60 flex justify-between items-center flex-col-reverse lg:flex-row gap-4 lg:gap-7 xl:gap-10 h-full'>
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
        <div className='bg-shape z-[1]'>
          <Image
            src='/assets/images/avatar.webp'
            width={480}
            height={480}
            alt='logo'
            title='logo'
            className='max-h-[350px] lg:max-h-[480px] object-cover border-2 border-white rounded-[40%_60%_55%_45%_/_48%_46%_54%_52%]'
          />
        </div>
      </div>
    </section>
  )
}
