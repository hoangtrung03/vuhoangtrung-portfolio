// import { Suspense, lazy } from 'react'

import Experience from './_components/Experience'
import Hero from './_components/Hero'
import Projects from './_components/Projects'
import Skills from './_components/Skills'

// const Hero = lazy(() => import('@/app/_components/Hero'))
// const Experience = lazy(() => import('@/app/_components/Experience'))
// const Skills = lazy(() => import('@/app/_components/Skills'))
// const Projects = lazy(() => import('@/app/_components/Projects'))

export default function Home() {
  return (
    <>
      <main className='mt-[3.75rem] bg-third w-full duration-200'>
        {/* <Suspense fallback={<div></div>}> */}
        <Hero />
        {/* </Suspense> */}
        {/* <Suspense fallback={<div></div>}> */}
        <Experience />
        {/* </Suspense> */}
        {/* <Suspense fallback={<div></div>}> */}
        <Skills />
        {/* </Suspense> */}
        {/* <Suspense fallback={<div></div>}> */}
        <Projects />
        {/* </Suspense> */}
      </main>
    </>
  )
}
