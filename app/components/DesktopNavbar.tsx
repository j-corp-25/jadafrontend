'use client'

import Logo from './Logo' // Your Logo component
import MenuItem from './MenuItem' // Your MenuItem component
import Button from './Button' // Your Button component
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const DesktopNavbar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleButtonClick = (e) => {
    e.preventDefault()
    router.push('/booking')
  }

  return (
    <nav className='hidden md:flex md:flex-row bg-jada-green-500 px-2 items-center md:justify-between h-20 shadow-xl container-fluid whitespace-nowrap'>
      <div className='flex flex-row items-center  '>
        <Logo src='/Logo-image.png' alt='logo' />
        <ul className='flex gap-5'>
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </ul>
      </div>
      <div className=''>
        <Button text='Book Jada' onClick={handleButtonClick} />
      </div>
    </nav>
  )
}

export default DesktopNavbar
