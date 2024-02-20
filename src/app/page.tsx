import { Suspense, lazy } from 'react'
const Hero = lazy(() => import('@/app/_components/Hero'))
const Experience = lazy(() => import('@/app/_components/Experience'))
const Skills = lazy(() => import('@/app/_components/Skills'))

export default function Home() {
  return (
    <>
      <main className='mt-[3.75rem] bg-third w-full duration-200'>
        <Suspense fallback={<div></div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Skills />
        </Suspense>
      </main>
    </>
  )
}
