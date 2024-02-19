'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  isOpenMenu: boolean
  closeMenu: () => void
}

export default function DrawerMobile({ isOpenMenu, closeMenu }: Props) {
  return (
    <>
      <div
        className={classNames('fixed z-50 top-0 bottom-0 w-full duration-300 ease-in-out bg-third text-white', {
          '-right-[110%]': !isOpenMenu,
          'right-0': isOpenMenu
        })}
      >
        <div className='h-14 shadow-2 flex justify-between items-center px-4'>
          <Link href='/' title='logo'>
            <Image src='/logo.svg' width={40} height={40} alt='logo' title='logo' priority />
          </Link>
          <div className='w-14 h-14'></div>
        </div>
        <div className='h-[calc(100%-56px)] overflow-auto'>
          <div className='px-[15px] py-2.5'>
            <nav>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      closeMenu()
                    }}
                    className='flex h-12 font-medium hover:font-bold hover:text-primary items-center w-full justify-between'
                    href='#about'
                    title='About'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      closeMenu()
                    }}
                    className='flex h-12 font-medium hover:font-bold hover:text-primary items-center w-full justify-between'
                    href='#experience'
                    title='Experience'
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      closeMenu()
                    }}
                    className='flex h-12 font-medium hover:font-bold hover:text-primary items-center w-full justify-between'
                    href='#skills'
                    title='Skills'
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      closeMenu()
                    }}
                    className='flex h-12 font-medium hover:font-bold hover:text-primary items-center w-full justify-between'
                    href='#projects'
                    title='Projects'
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
