'use client'
import { useSession } from 'next-auth/react'
import MenuItem from './MenuItem' // Your MenuItem component
import Button from './Button' // Your Button component
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoImage from '../dashboard/components/LogoImage'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '/dashboard', label: 'Dashboard' },
]

const DesktopNavbar: React.FC = () => {
  const pathname = usePathname()
  const { status } = useSession()

  const filteredMenuItems = menuItems.filter(
    (item) => item.href !== '/dashboard' || status === 'authenticated'
  )

  return (
    <nav className='hidden md:flex md:flex-row bg-jada-green-700 px-2 items-center md:justify-between h-20 shadow-xl container-fluid whitespace-nowrap'>
      <div className='flex flex-row items-center  '>
        <Link href='/'>
          <LogoImage />
        </Link>
        <ul className='flex gap-5'>
          {filteredMenuItems.map((item) => (
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
        <Link href='/booking'>
          <Button text='Book Jada' />
        </Link>
      </div>
    </nav>
  )
}

export default DesktopNavbar
