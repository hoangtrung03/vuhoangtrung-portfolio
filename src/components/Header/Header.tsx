'use client'

import { useDisplay } from '@/lib/hooks/useDisplay'
import Image from 'next/image'
import Link from 'next/link'
import HeaderMobile from './components/HeaderMobile'

export default function Header() {
  const isMobile = useDisplay(1024)

  return isMobile ? (
    <>
      <HeaderMobile />
    </>
  ) : (
    <>
      <header className='w-full fixed top-0 text-white p-2 border-b border-gray-1 z-10 h-[3.75rem] bg-opacity-10 antialiased backdrop-blur-[1.5px]'>
        <div className='container flex items-center justify-between h-full'>
          <Link href='/' title='logo'>
            <Image src='/logo.svg' width={40} height={40} alt='logo' title='logo' priority />
          </Link>
          <ul className='flex justify-end items-center gap-4'>
            <li>
              <Link href='#about' title='About' className="font-semibold text-18 hover:text-secondary">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href='#experience' title='Experience' className="font-semibold text-18 hover:text-secondary">
                <p>Experience</p>
              </Link>
            </li>
            <li>
              <Link href='#skills' title='Skills' className="font-semibold text-18 hover:text-secondary">
                <p>Skills</p>
              </Link>
            </li>
            <li>
              <Link href='#projects' title='Projects' className="font-semibold text-18 hover:text-secondary">
                <p>Projects</p>
              </Link>
            </li>
          </ul>
          <div>
            <Link href='https://github.com/hoangtrung03' title='Github' target='_blank'>
              <Image src='/assets/images/github.svg' width={32} height={32} alt='Github' title='Github' />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
