'use client'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
// import Image from 'next/image'
// import Logo from './Logo'
import LogoImage from '../dashboard/components/LogoImage'
// import { useLogos } from '../context/LogoContext'

interface CustomUser {
  username?: string
}

const Footer = ({children}) => {
  // const {Logo } = useLogos();
  const { data: session } = useSession()
  const user = session?.user as CustomUser
  return (
    <footer className='bg-light-text'>
      <div className='w-full mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center md:static  sm:justify-between  '>
          {/* <Link href='/'>
          {Logo && <Image src={Logo} width={50} height={50} alt='logo'/>}
        </Link> */}
          {children}
          <span className='self-center  text-jada-purple-700 text-2xl font-semibold whitespace-nowrap p-1 mt-5'>
            Jadas website name
          </span>

          <ul className='mx-5 flex  sm:w-auto flex-col md:flex-row items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-3'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                About This This Project
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                GitHub
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Source Code
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Find us on linked in
              </a>
            </li>
            <li>
              {user ? (
                <>
                  <div>Logged in as: {user.username}</div>
                  <button className='text-red-500' onClick={() => signOut()}>
                    Sign out
                  </button>
                </>
              ) : (
                <button className='text-green-600' onClick={() => signIn()}>
                  Admin Log In
                </button>
              )}
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-900 lg:my-8' />
        <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
          Copyright © 2023{' '}
          <a href='' className='hover:underline'>
            Jadas website
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
