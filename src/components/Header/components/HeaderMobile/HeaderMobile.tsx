'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DrawerMobile from '../DrawerMobile'

export default function HeaderMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header>
      <div className='h-[3.75rem] flex lg:hidden justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-gray-1 w-full antialiased backdrop-blur-[4px]'>
        <div className='pl-4'>
          <Link href='/' title='logo'>
            <Image src='/logo.svg' title='logo' alt='logo' width={36} height={36} priority={true} />
          </Link>
        </div>
      </div>
      <button
        onClick={handleOpenMenu}
        aria-label='Touch menu'
        className='flex w-14 h-14 justify-center items-center fixed top-0 right-0 z-[100]'
      >
        <div
          className={classNames('hamburger-icon', {
            open: isOpenMenu
          })}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <DrawerMobile
        isOpenMenu={isOpenMenu}
        closeMenu={() => {
          setIsOpenMenu(false)
        }}
      />
    </header>
  )
}
