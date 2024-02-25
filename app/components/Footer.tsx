'use client'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
// import Image from 'next/image'
// import Logo from './Logo'
import LogoImage from '../dashboard/components/LogoImage'
// import { useLogos } from '../context/LogoContext'

interface CustomUser {
  username?: string
}

const Footer = ({ children }) => {
  // const {Logo } = useLogos();
  const { data: session } = useSession()
  const user = session?.user as CustomUser
  return (
    <footer className='bg-jada-bg-base shadow-inner'>
      <div className='flex flex-col  md:flex-row items-center space-y-5 md:space-x-5 md:justify-center mx-5'>
        <div className='mt-5'>{children}</div>

        <span className='self-center  text-jada-text-base text-2xl font-semibold whitespace-nowrap p-1 mt-5'>
          Caterpillar to Chrysalis Childcare
        </span>

        <div className='flex flex-row space-x-3 '>
          <a
            href='https://www.instagram.com/'
            className='text-3xl text-jada-text-base hover:text-jada-pink-700'
          >
            <FaInstagram />
          </a>
          <a
            href='https://www.facebook.com/'
            className='text-3xl text-jada-text-base hover:text-jada-pink-700'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.twitter.com/'
            className='text-3xl text-jada-text-base hover:text-jada-pink-700'
          >
            <FaTwitter />
          </a>
        </div>

        <ul className='mx-5 flex  sm:w-auto flex-col md:flex-row items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-3'>
          <li className='hover:underline me-4 md:me-6'>
            <Link href='/services'>Services</Link>
          </li>
          <li className='hover:underline me-4 md:me-6'>
            <Link href='/Contact'>Contact</Link>
          </li>
          <li>
            <a
              href='https://www.greatjoycounseling.org'
              rel='noopener noreferrer'
              className='hover:underline me-4 md:me-6'
              target='_blank'
            >
              Need Counseling?
            </a>
          </li>
          <li>
            <a href='https://github.com/j-corp-25' className='hover:underline' target='_blank' rel='noopener noreferrer'>
              Website Creator
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
      <hr className='my-8 border-jada-text-base lg:my-8' />
      <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
        Copyright © 2024{' '}
        <a href='' className='hover:underline'>
          Caterpillar to Chrysalis Childcare
        </a>
      </span>
    </footer>
  )
}

export default Footer
