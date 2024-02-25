import React, { useState } from 'react'
import MenuItem from './MenuItem'
import Button from './Button'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { useSession } from 'next-auth/react'
// import LogoImage from '../dashboard/components/LogoImage'
import { usePathname } from 'next/navigation'
// import { useLogos } from '../context/LogoContext'
// import Logo from './Logo'
// import Image from 'next/image'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  // { href: '/services', label: 'Services' },
  {href:'/testimonials', label: 'Testimonials'},
  { href: '/booking', label: 'Book Jada' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  { href: '/dashboard', label: 'Dashboard' },
]

const MobileNavbar = ({children}) => {
  // const {Logo } = useLogos();
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { status } = useSession()

  const filteredMenuItems = menuItems.filter(
    (item) => item.href !== '/dashboard' || status === 'authenticated'
  )
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='md:hidden bg-jada-bg-base px-4 flex items-center justify-between h-20 shadow-xl'>
      {/* <Link href='/'>
      {Logo && <Image src={Logo} width={50} height={50} alt='logo'/>}

      </Link> */}
      {children}

      <div
        className={`absolute ${
          isMenuOpen ? 'top-[5rem]' : 'top-[-100vh]'
        } transition-top duration-500 ease-in-out px-3 py-2 w-full left-0 bg-jada-bg-base shadow border-t-2 border-jada-bg-300`}
      >
        <ul className='flex flex-col gap-10 text-jada-text-base '>
          {filteredMenuItems.map((item) => (
            <div key={item.href} onClick={closeMenu}>
              <MenuItem
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            </div>
          ))}
          <Link href='/booking'>
            <Button text='Book Jada' />
          </Link>
        </ul>
      </div>

      <div className='z-50'>
        <button className='text-jada-purple-800 '>
          {isMenuOpen ? (
            <IoCloseOutline
              className='cursor-pointer  md:hidden'
              onClick={toggleMenu}
              size={40}
            />
          ) : (
            <FaBars
              className=' cursor-pointer md:hidden'
              onClick={toggleMenu}
              size={40}
            />
          )}
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar
