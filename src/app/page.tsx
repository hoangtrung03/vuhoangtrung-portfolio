import Experience from '@/app/_components/Experience'
import Hero from '@/app/_components/Hero'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AnimatedCursor from 'react-animated-cursor'

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color='256, 256, 256'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Header />
      <main className='mt-[3.75rem] bg-third w-full duration-200'>
        <Hero />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
