import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-screen fixed top-0 text-white p-2 bg-[#171717] border-b border-[#2e2e2e] z-[1] h-[3.75rem]'>
      <div className='container flex items-center justify-between h-full'>
        <Link href='/'>
          <Image src='/logo.svg' width={40} height={40} alt='logo' title='logo' />
        </Link>
        <ul className='flex justify-end items-center gap-4'>
          <li>
            <Link href='/#work'>
              <p>Work</p>
            </Link>
          </li>
          <li>
            <Link href='/#services'>
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href='/#skills'>
              <p>Skills</p>
            </Link>
          </li>
          <li>
            <Link href='/#contact'>
              <p>Contact</p>
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
  )
}
