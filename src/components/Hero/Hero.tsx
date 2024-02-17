'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import WavyText from '../WavyText'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    setScroll(window.innerHeight)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'scroll',
        handleScroll(() => {
          setScroll(window.scrollY + window.innerHeight)
        })
      )
    }
  }, [])

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
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: 0.7 }}
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
          <ParallaxItem speed={-0.01} scroll={scroll} className='absolute -left-10'>
            <motion.div
              className='w-[20px] h-[20px] rounded-full border-2 border-red-400 '
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
          </ParallaxItem>
          <ParallaxItem speed={-0.01} scroll={scroll} className='absolute left-0 bottom-10'>
            <motion.div
              className='w-[18px] h-[18px] rounded-full border-2 border-white'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
          </ParallaxItem>
          <ParallaxItem speed={-0.01} scroll={scroll} className='absolute right-0 -top-10'>
            <motion.div
              className='w-[18px] h-[18px] rounded-full border-2 border-blue-400'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
          </ParallaxItem>
          <ParallaxItem speed={-0.01} scroll={scroll} className='absolute right-3 top-2'>
            <motion.div
              className='w-[26px] h-[26px] rounded-full border-2 border-white'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
          </ParallaxItem>
        </div>
      </div>
    </section>
  )
}

function throttle(func: Function, limit: number): () => void {
  let lastFunc: NodeJS.Timeout | null
  let lastRan: number | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any) {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      if (lastFunc) clearTimeout(lastFunc)
      lastFunc = setTimeout(
        function () {
          if (Date.now() - (lastRan as number) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        },
        limit - (Date.now() - (lastRan as number))
      )
    }
  }
}

const handleScroll = (cb: Function) => throttle(cb, 100)
const applyParallax = (scroll: number, y: number, amount: number) => {
  if (scroll > y) {
    const value = (scroll - y) * amount
    return value
  }

  return 0
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ParallaxItem = (props: any) => {
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
      animate={{
        opacity: scroll > y ? 1 : 0,
        y: applyParallax(scroll, y, speed)
      }}
      transition={{ duration: 0.5 }}
      {...rest}
    />
  )
}
