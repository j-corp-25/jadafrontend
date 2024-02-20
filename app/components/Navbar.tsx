'use client'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const Navbar = ({ children }) => {
  return (
    <>
      <MobileNavbar>{children}</MobileNavbar>

      <DesktopNavbar>
        {children}
      </DesktopNavbar>
    </>
  )
}

export default Navbar
