'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const AdminLogin = () => {
  const { data: session, status, } = useSession()
  console.log(session)
  console.log(status)





  return (
    <div className='container mx-auto '>
      <div className='text-center'>Login</div>
      {session?.user ? (
        <>
          <div className='bg-blue-100 text-black'>
            Logged in as {session.user.email}
          </div>
          {/* Assuming you're displaying the user's email. Adjust according to your session structure */}
          <button className='text-red-500' onClick={() => signOut()}>
            Sign out
          </button>
        </>
      ) : (
        <button className='text-green-600' onClick={() => signIn()}>
          Sign In
        </button>
      )}

      <Link href="/">
      Home
      </Link>
      {/* <form className='flex flex-col items-center'>
        <label htmlFor='username' className='cursor-pointer'>
          {' '}
          username
        </label>
        <input
          className='border border-gray-300'
          id='username'
          placeholder='Email'
          type='email'
        />

        <label htmlFor='password' className='cursor-pointer'>
          {' '}
          password
        </label>
        <input
          className='border border-gray-300'
          id='password'
          placeholder='password'
          type='password'
        />
        <button type="submit" className="bg-blue-100 ">Submit</button>
      </form> */}
    </div>
  )
}

export default AdminLogin
