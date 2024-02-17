'use client'
import { useSession } from 'next-auth/react'
import MenuItem from './MenuItem' // Your MenuItem component
import Button from './Button' // Your Button component
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLogos } from '../context/LogoContext'
import Image from 'next/image'

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
  const {Logo } = useLogos();
  const pathname = usePathname()
  const { status } = useSession()

  const filteredMenuItems = menuItems.filter(
    (item) => item.href !== '/dashboard' || status === 'authenticated'
  )

  return (
    <nav className='hidden md:flex md:flex-row bg-jada-green-700 px-2 items-center md:justify-between h-20 shadow-xl container-fluid whitespace-nowrap px-2 mx-auto'>
      <div className='flex flex-row items-center mx-10 gap-5 '>
        <Link href='/'>
          {Logo && <Image src={Logo} width={50} height={50} alt='logo'/>}
        </Link>
        <ul className='flex gap-3'>
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
      <div className='mr-10'>
        <Link href='/booking'>
          <Button text='Book Jada' />
        </Link>
      </div>
    </nav>
  )
}

export default DesktopNavbar
