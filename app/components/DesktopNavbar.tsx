import { useSession } from 'next-auth/react'
import MenuItem from './MenuItem' // Your MenuItem component
import Button from './Button' // Your Button component
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { useLogos } from '../context/LogoContext'
// import Image from 'next/image'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  // { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/booking', label: 'Book Jada' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  { href: '/dashboard', label: 'Dashboard' },
]

const DesktopNavbar = ({ children }) => {
  // const {Logo } = useLogos();
  const pathname = usePathname()
  const { status } = useSession()

  const filteredMenuItems = menuItems.filter(
    (item) => item.href !== '/dashboard' || status === 'authenticated'
  )

  return (
    <nav className='hidden md:flex md:flex-row bg-jada-bg-base items-center h-20 shadow-xl md:justify-center container-fluid whitespace-nowrap'>
      <div className='flex flex-row justify-between items-center mx-[12.25rem] w-full' >
        <div className='min-w-[2.25rem] mx-1'>{children}</div>

        <ul className='flex space-x-2'>
          {filteredMenuItems.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </ul>

        <div className='mx-1' >
          <Link href='/booking'>
            <Button text='Book Jada' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
