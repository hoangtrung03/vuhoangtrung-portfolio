import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='w-full fixed top-0 text-white p-2 border-b border-gray-1 z-[1] h-[3.75rem] bg-opacity-10 antialiased backdrop-blur-[1.5px]'>
        <div className='container flex items-center justify-between h-full'>
          <Link href='/' title='logo'>
            <Image src='/logo.svg' width={40} height={40} alt='logo' title='logo' priority/>
          </Link>
          <ul className='flex justify-end items-center gap-4'>
            <li>
              <Link href='/#work' title='Work'>
                <p>Work</p>
              </Link>
            </li>
            <li>
              <Link href='/#projects' title='Projects'>
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link href='/#skills' title='Skills'>
                <p>Skills</p>
              </Link>
            </li>
            <li>
              <Link href='/#contact' title='Contact'>
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
    </>
  )
}
